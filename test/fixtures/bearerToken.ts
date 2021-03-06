export function getBearerToken (correct: boolean): { expectedWebId: URL, bearerToken: string, aud: string } {
  // jwt.sign(payload, secretOrPrivateKey, [options, callback])
  const bearerToken = `eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL3BoZXl2YWVyLmdpdGh1Yi5pbyIsImF1ZCI6Imh0dHBzO\
i8vamFja3Nvbi5zb2xpZC5jb21tdW5pdHkiLCJleHAiOjE1NjA3NzM4OTcsImlhdCI6MTU2MDc3MDI5NywiaWRfdG9rZW4iOiJleUpoYkdj\
aU9pSlNVekkxTmlJc0luUjVjQ0k2SWtwWFZDSXNJbXRwWkNJNkluaGxUMnBsY3psMU0wRmpWVFJNUW5wallXNUZUVGR3V2t4M1UyeDRZVTQ\
zVlRZeVducFBRa1JSZFhjaWZRLmV5SnpkV0lpT2lKb2RIUndjem92TDJwaFkydHpiMjR1YzI5c2FXUXVZMjl0YlhWdWFYUjVMM0J5YjJacG\
JHVXZZMkZ5WkNOdFpTSXNJbTV2Ym1ObElqb2lXSHB4YVVkVGFqRldTM1p0WWxCblNtbFdOMEZRYUcxYU5VaHlaVk5wWDJOUGJFMUNNbTVwT\
jJ0MldTSXNJbk5wWkNJNkltRmxPVGszTkRNMUxUSXlZMlF0TkRKbU5DMWhaRFkzTFRaaVl6WTBaRFV5TXpSa1lTSXNJbUYwWDJoaGMyZ2lP\
aUprUjBKWFF6VnVkRk5RY21aaGR6TXdTV1YwWVc5Uklpd2ljMTlvWVhOb0lqb2llRFJYUlV3eVkzZzFhMGxOZDB0RWRXVnFkRE56ZHlJc0l\
tTnVaaUk2ZXlKaGJHY2lPaUpTVXpJMU5pSXNJbVVpT2lKQlVVRkNJaXdpWlhoMElqcDBjblZsTENKclpYbGZiM0J6SWpwYkluWmxjbWxtZV\
NKZExDSnJkSGtpT2lKU1UwRWlMQ0p1SWpvaWVEaERObWRMY0Uxd01saDVOWFJGVmtRNU4yUk9YMGd3VG5KWFZUWldORzlLWmpOellrVnBWR\
Up3YVc5b1oxVnhTbDkzY1dKNVR6UTRlbVpEZVhOTE5ITTVaVm8zTW1SMWJUWkxNWEJpYkVSRlkxaE1kMTgzUjIxQ2IyZFRWbUp0YUdVNFlsQ\
nBNa1oxU2pOclIwSnZkV05ITkRWcldrdzFNVEJYV0VkcGNsQkpibUl4VUhWSVF6TlJXakpxVkhaQmIwUTVaRWx1T1d0RU16ZzBVR2d4ZDJse\
lJuSk1UVzB4UW1kMmJUTlNaek01VGxCTlNtMVdSR1pmY1drd2IwYzFSRFJEY0dSaVV6QlBkVkUxWm01NVVXdGpSSFpPYlc1R1VVZ3dNRll5\
TkRSTWNXUnZWakZ0UW00eFZYWnhOaTFJUkVvemIyRmFUMWg1TTBabVFuUm5SWFZ3VkhCSGEzQnRUbVpKY1dWbGJrOUtVekJzWHpnMVJFNT\
FUSGRTUm1ndFVsbDRRbDlsUWswNU1VbDZkRnAwY1dwTFR6WnJUVzFVZFZadVJucEVNbTFPZEVSelJIVjZNVTVMU0hsSE1rbHpkVzF3UlVG\
UkluMHNJbUYxWkNJNkltaDBkSEJ6T2k4dmNHaGxlWFpoWlhJdVoybDBhSFZpTG1sdklpd2laWGh3SWpveE5UWXdOemN6T0RreUxDSnBZWFF\
pT2pFMU5qQTNOekF5T1RJc0ltbHpjeUk2SW1oMGRIQnpPaTh2Ykc5allXeG9iM04wT2pnME5ETWlmUS5ZWFM0MlhlbWFzajZEUk5lNEd5LVp\
3MDBoLXpFU29YRnE1YVNUR3MwckpiMExTMkdhd2RPa19iSEd0ZVZrMHNLdUtfZFhobHlnUl9DeDNqOHE2QmVSWDFTTHdPSkpyLTc4dkZZMFV\
1R2ZvRjZMSXJjM1dSaXpCMmtoZEt2WVBhNThXSDk2Um00YlBaNVVZTzUzYnFMYnE0ejRWWFU0b19tLVFvUzdUUEtmQ0tRVWd4ZG9HUkJUWXl\
nZUxzYmx3dFQzeXRwYXhjYjFBVjFYc19zWFhuelpqMnNCcURoaUs3T0ZjdmNPbi0waUxfTUVNS01VVFhfMHNnSTBsc0ZIbU5wdmtwU3hCT2N\
OZVVfWDlhWVF4YXp3VXpjdWNJM3lxQ1FYam9Oa0ktYXdsMzJ4VkRfd25IN2FYd19RSTVUOU1JckhGOG9XWXBhRVp6LXE3SG1kRVFVa0EiLCJ\
0b2tlbl90eXBlIjoicG9wIn0.iLAwGcEi-LmibDum3rMxGpVGz9lXHqeLR9uXImCM097Mm29EeIcZX8Pgb0W3T2jQSKlL0HuiSGO1bkl5sEQq\
Lq4FswXrSARnOjnEQt_uQZRj3Hzm7BWH_MpHKeTzvMXQayeJyqyV6w_gvpAeSYC5Lz4ybESajc8bWtBZ_2O4SQG5L3wFUv_GkYFUL8gTPOWI\
8F9bpSTz_Q99EftjD0DvJQeEMJTqX5XHECFZvx5PfV36syA82xlLEF_yrLuQqozBnlrAKPDGuPsgxKwjwlipXgO1ToZ_rdL0rwSNcoyRoRHv9\
_POhdYsAqWhTiGVxHq0xiHqqeJMtdQcl-ZtGx1XRQ`
  return {
    expectedWebId: new URL('https://jackson.solid.community/profile/card#me'),
    bearerToken: (correct ? bearerToken : bearerToken.substring(0, 100)),
    aud: 'https://pheyvaer.github.io'
  }
}
