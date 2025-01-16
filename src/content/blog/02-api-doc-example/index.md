---
title: "API Documentation"
description: "REST API reference table example"
date: "Oct 11 2024"
---

# RESTful API Documentation example

This is example documentation for an API that uploads and retrieves sound files.

## Upload a sound file to the user's profile

### URL
```
POST https://api.example.com/profile/sound
```

### Headers
| Header Name | Description | Required | Values |
|--|--|--|--|
| **Bearer** | Access token | Required | See *Authorization* section |
| **Content-Type** | Sound file format | Optional | audio/mpeg (mp3) or audio/x-wav (wav). Default is audio/mpeg |
| **Accept** | Response data format | Optional | application/json or application/xml. Default is application/json |

### POST or PUT body
The sound file
> **Note:** The sound file must be 5 minutes or shorter.

### Sample request
```
POST https://api.example.com/profile/sound

Bearer: {accesstokenkey}
Content-Type: audio/mpeg
Accept: application/json

{
	[The sound file]
}
```

### Response
| Element | Description | Type | Notes |
|--|--|--|--|
| **id** | ID of the sound file | integer |  |
| **length** | Length of sound file | float | Unit is seconds |

### Sample response
```
{
	"id": 3543,
	"length": 19.8
}
```

## Retrieve sound file info for a user

### URL
```
GET https://api.example.com/user/{user id}/profile/sound
```
> **Note:** {user id} is the specific user's ID

### Query parameters
| Element | Description | Type | Required | Notes |
|--|--|--|--|--|
| **sortOrder** | The order that the sound files are returned | string | Optional | Possible values: **mostRecent**, **earliest**, **shortest**, **longest**. Default is **mostRecent** |

### Status codes and errors
| Code | Description | Notes |
|--|--|--|
| **200** | OK | Successful `POST` or `GET` |
| **401** | Unauthorized | Bad access token |
| **413** | Payload too large | Sound file being `POST`ed is too long |
