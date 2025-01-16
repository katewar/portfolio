---
title: "JSON and XML"
description: "Response and request examples"
date: "Oct 09 2024"
---

# JSON and XML Response and Request Examples

## JSON Response and Request Tables
A JSON response for a multi-day weather forecast API.
| Element | Description | Type | Notes |
|--|--|--|--|
| **longitude** | East/West GPS coordinate of the location | number |  |
| **latitude** | North/South GPS coordinate of the location | number |  |
| **forecasts** | Daily forecasts | array of objects | Each object is a daily forecast |
|--|--|--|--|
| **date** | The date of the forecast | string | Format is YYYY-MM-DD |
| **description** | Text description of the weather | string | Values are limited to "sunny", "overcast", "partly cloudy", "raining", or "snowing" |
| **maxTemp** | High temperature | number | Units are in degrees Celsius |
| **minTemp** | Low temperature | number | Units are in degrees Celsius |
| **windSpeed** | Wind speed | number | Units are in kilometers per hour |
| **danger** | True if weather conditions are dangerous. False if weather conditions are safe. | Boolean |  |

A JSON request for an online calendar.
| Element | Description | Type | Required | Notes |
|--|--|--|--|--|
| **meeting** | Top level | data object | Required |  |
| **time** | Start time of the meeting | string | Required | Time is GMT. Format is YYYY-MM-DD HH:MM |
| **duration** | How long the meeting is booked | number | Required | Units are in minutes |
| **description** | Text description of the meeting | string | Required |  |
| **location** | Where the meeting is located | string | Optional | Default value is an empty string |
| **reminder** | Amount of time before the meeting that a reminder is sent out | number | Optional | Default value is 10 minutes |
| **invitees** | A list of email addresses of people invited to the meeting | array of strings containing emails | Optional | Default value is an empty array |

## XML Request Tables
An XML request to record a TV program.
| Element | Description | Type | Required | Notes |
|--|--|--|--|--|
| **recordTV** | Top level tag | TV program data | Required |  |
| **when** | Tag for time data | Recording time data | Required |  |
| **date** | Date of recording | string | Optional | Format is YYYY-MM-DD. Default value is today's date |
| **time** | Start time of the recording | string | Required | 24-hour format uses HH:MM, 12-hour format uses HH:MM AM/PM |
| **format** | Hour format of recording | number | Required | 24-hour or 12-hour format indicator |
| **duration** | Length of recording | number | Required | Attribute is in hours |
| **station** | Channel of the TV program | number | Required | Attribute is the channel number |

An XML request for temperature and humidity data from a computer.
**dailyData**: Top level tag that contains the reference date and its hourly data.
| Element | Description | Type | Notes |
|--|--|--|--|
| **date** | the date of the data | string | Format is in YYYY-MM-DD |
| **hourlyData** | Contains the reported hourly data | data object |  |
**hourlyData**: Contains greenhouse sensor data for one hour.
| Element | Description | Type | Notes |
|--|--|--|--|
| **time** | Local time of the data | string | 24-hour format HH:MM |
| **device** | Contains data gathered from the sensors | data object |  |
**device**: Contains data gathered from a greenhouse sensor.
| Element | Description | Type | Notes |
|--|--|--|--|
| **id** | Identification number of sensor | number |  |
| **temperature** | Temperature reported by the sensor | number | Units are in degrees Fahrenheit |
| **humidity** | Humidity reported by the sensor | number | Given as a percentage |
