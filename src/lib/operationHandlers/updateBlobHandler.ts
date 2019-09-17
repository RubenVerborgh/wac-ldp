import { Blob } from '../storage/Blob'

import { WacLdpTask, TaskType } from '../api/http/HttpParser'
import { WacLdpResponse, ErrorResult, ResultType } from '../api/http/HttpResponder'

import Debug from 'debug'

import { makeResourceData, objectToStream } from '../rdf/ResourceDataUtils'
import { StoreManager } from '../rdf/StoreManager'
import { getResourceDataAndCheckETag } from './getResourceDataAndCheckETag'
import { ACL } from '../rdf/rdf-constants'
import IResourceIdentifier from 'solid-server-ts/src/ldp/IResourceIdentifier'
import IRepresentationPreferences from 'solid-server-ts/src/ldp/IRepresentationPreferences'
import IOperation from 'solid-server-ts/src/ldp/operations/IOperation'
import ResponseDescription from 'solid-server-ts/src/http/ResponseDescription'
import PermissionSet from 'solid-server-ts/src/permissions/PermissionSet'

const debug = Debug('update-blob-handler')

export class UpdateBlobHandler implements IOperation {
  preferences: IRepresentationPreferences
  target: IResourceIdentifier
  async execute (): Promise<ResponseDescription> {
    return {}
  }
  constructor (method: string, target: IResourceIdentifier, representationPreferences: IRepresentationPreferences, resourceStore: StoreManager) {
    this.preferences = representationPreferences
    this.target = target
  }
  canHandle = () => ((this.preferences as WacLdpTask).wacLdpTaskType() === TaskType.blobUpdate)
  requiredPermissions = new PermissionSet({ read: true, write: true })
  handle = async function (task: WacLdpTask, storeManager: StoreManager, aud: string, skipWac: boolean, appendOnly: boolean): Promise<WacLdpResponse> {
    const resourceData = await getResourceDataAndCheckETag(task, storeManager)
    if (!resourceData) {
      throw new ErrorResult(ResultType.NotFound)
    }
    debug('operation updateBlob!', { appendOnly })
    const turtleDoc: string = await storeManager.patch(task.fullUrl(), await task.requestBody() || '', appendOnly)
    const blob = storeManager.getLocalBlob(task.fullUrl())
    await blob.setData(await objectToStream(makeResourceData(resourceData.contentType, turtleDoc)))
    storeManager.flushCache(task.fullUrl())
    return {
      resultType: ResultType.OkayWithoutBody,
      resourcesChanged: [ task.fullUrl() ]
    } as WacLdpResponse
  }
}
