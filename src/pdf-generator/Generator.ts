import { text, image, barcodes } from "@pdfme/schemas";
import { generate } from "@pdfme/generator";
import { validateGoals } from "./Generator.mapper";

export const Generator = (goals: string[]) => {
    validateGoals(goals);

    (async () => {
    const template = {
    "schemas": [
        {
        "Goal 1": {
            "type": "text",
            "position": {
            "x": 33,
            "y": 90
            },
            "width": 28,
            "height": 30,
            "rotate": 0,
            "alignment": "center",
            "verticalAlignment": "middle",
            "fontSize": 13,
            "lineHeight": 1,
            "characterSpacing": 0,
            "fontColor": "#000000",
            "backgroundColor": "",
            "opacity": 1,
            "fontName": "Roboto",
            "dynamicFontSize": {
            "min": 8,
            "max": 28,
            "fit": "vertical"
            }
        },
        "Goal 2": {
            "type": "text",
            "position": {
            "x": 72,
            "y": 90
            },
            "width": 28,
            "height": 30,
            "rotate": 0,
            "alignment": "center",
            "verticalAlignment": "middle",
            "fontSize": 13,
            "lineHeight": 1,
            "characterSpacing": 0,
            "fontColor": "#000000",
            "backgroundColor": "",
            "opacity": 1,
            "fontName": "Roboto",
            "dynamicFontSize": {
            "min": 8,
            "max": 28,
            "fit": "vertical"
            }
        },
        "Goal 3": {
            "type": "text",
            "position": {
            "x": 110.25,
            "y": 90
            },
            "width": 28,
            "height": 30,
            "rotate": 0,
            "alignment": "center",
            "verticalAlignment": "middle",
            "fontSize": 13,
            "lineHeight": 1,
            "characterSpacing": 0,
            "fontColor": "#000000",
            "backgroundColor": "",
            "opacity": 1,
            "fontName": "Roboto",
            "dynamicFontSize": {
            "min": 8,
            "max": 28,
            "fit": "vertical"
            }
        },
        "Goal 4": {
            "type": "text",
            "position": {
            "x": 148.5,
            "y": 90
            },
            "width": 28,
            "height": 30,
            "rotate": 0,
            "alignment": "center",
            "verticalAlignment": "middle",
            "fontSize": 13,
            "lineHeight": 1,
            "characterSpacing": 0,
            "fontColor": "#000000",
            "backgroundColor": "",
            "opacity": 1,
            "fontName": "Roboto",
            "dynamicFontSize": {
            "min": 8,
            "max": 28,
            "fit": "vertical"
            }
        },
        "Goal 5": {
            "type": "text",
            "position": {
            "x": 33,
            "y": 135
            },
            "width": 28,
            "height": 30,
            "rotate": 0,
            "alignment": "center",
            "verticalAlignment": "middle",
            "fontSize": 13,
            "lineHeight": 1,
            "characterSpacing": 0,
            "fontColor": "#000000",
            "backgroundColor": "",
            "opacity": 1,
            "fontName": "Roboto",
            "dynamicFontSize": {
            "min": 8,
            "max": 28,
            "fit": "vertical"
            }
        },
        "Goal 6": {
            "type": "text",
            "position": {
            "x": 72,
            "y": 135
            },
            "width": 28,
            "height": 30,
            "rotate": 0,
            "alignment": "center",
            "verticalAlignment": "middle",
            "fontSize": 13,
            "lineHeight": 1,
            "characterSpacing": 0,
            "fontColor": "#000000",
            "backgroundColor": "",
            "opacity": 1,
            "fontName": "Roboto",
            "dynamicFontSize": {
            "min": 8,
            "max": 28,
            "fit": "vertical"
            }
        },
        "Goal 7": {
            "type": "text",
            "position": {
            "x": 110.25,
            "y": 135
            },
            "width": 28,
            "height": 30,
            "rotate": 0,
            "alignment": "center",
            "verticalAlignment": "middle",
            "fontSize": 13,
            "lineHeight": 1,
            "characterSpacing": 0,
            "fontColor": "#000000",
            "backgroundColor": "",
            "opacity": 1,
            "fontName": "Roboto",
            "dynamicFontSize": {
            "min": 8,
            "max": 28,
            "fit": "vertical"
            }
        },
        "Goal 8": {
            "type": "text",
            "position": {
            "x": 148.5,
            "y": 135
            },
            "width": 28,
            "height": 30,
            "rotate": 0,
            "alignment": "center",
            "verticalAlignment": "middle",
            "fontSize": 13,
            "lineHeight": 1,
            "characterSpacing": 0,
            "fontColor": "#000000",
            "backgroundColor": "",
            "opacity": 1,
            "fontName": "Roboto",
            "dynamicFontSize": {
            "min": 8,
            "max": 28,
            "fit": "vertical"
            }
        },
        "Goal 9": {
            "type": "text",
            "position": {
            "x": 33,
            "y": 180
            },
            "width": 28,
            "height": 30,
            "rotate": 0,
            "alignment": "center",
            "verticalAlignment": "middle",
            "fontSize": 13,
            "lineHeight": 1,
            "characterSpacing": 0,
            "fontColor": "#000000",
            "backgroundColor": "",
            "opacity": 1,
            "fontName": "Roboto",
            "dynamicFontSize": {
            "min": 8,
            "max": 28,
            "fit": "vertical"
            }
        },
        "Goal 10": {
            "type": "text",
            "position": {
            "x": 72,
            "y": 180
            },
            "width": 28,
            "height": 30,
            "rotate": 0,
            "alignment": "center",
            "verticalAlignment": "middle",
            "fontSize": 13,
            "lineHeight": 1,
            "characterSpacing": 0,
            "fontColor": "#000000",
            "backgroundColor": "",
            "opacity": 1,
            "fontName": "Roboto",
            "dynamicFontSize": {
            "min": 8,
            "max": 28,
            "fit": "vertical"
            }
        },
        "Goal 11": {
            "type": "text",
            "position": {
            "x": 110.25,
            "y": 180
            },
            "width": 28,
            "height": 30,
            "rotate": 0,
            "alignment": "center",
            "verticalAlignment": "middle",
            "fontSize": 13,
            "lineHeight": 1,
            "characterSpacing": 0,
            "fontColor": "#000000",
            "backgroundColor": "",
            "opacity": 1,
            "fontName": "Roboto",
            "dynamicFontSize": {
            "min": 8,
            "max": 28,
            "fit": "vertical"
            }
        },
        "Goal 12": {
            "type": "text",
            "position": {
            "x": 148.5,
            "y": 180
            },
            "width": 28,
            "height": 30,
            "rotate": 0,
            "alignment": "center",
            "verticalAlignment": "middle",
            "fontSize": 13,
            "lineHeight": 1,
            "characterSpacing": 0,
            "fontColor": "#000000",
            "backgroundColor": "",
            "opacity": 1,
            "fontName": "Roboto",
            "dynamicFontSize": {
            "min": 8,
            "max": 28,
            "fit": "vertical"
            }
        },
        "Goal 13": {
            "type": "text",
            "position": {
            "x": 33,
            "y": 225
            },
            "width": 28,
            "height": 30,
            "rotate": 0,
            "alignment": "center",
            "verticalAlignment": "middle",
            "fontSize": 13,
            "lineHeight": 1,
            "characterSpacing": 0,
            "fontColor": "#000000",
            "backgroundColor": "",
            "opacity": 1,
            "fontName": "Roboto",
            "dynamicFontSize": {
            "min": 8,
            "max": 28,
            "fit": "vertical"
            }
        },
        "Goal 14": {
            "type": "text",
            "position": {
            "x": 72,
            "y": 225
            },
            "width": 28,
            "height": 30,
            "rotate": 0,
            "alignment": "center",
            "verticalAlignment": "middle",
            "fontSize": 13,
            "lineHeight": 1,
            "characterSpacing": 0,
            "fontColor": "#000000",
            "backgroundColor": "",
            "opacity": 1,
            "fontName": "Roboto",
            "dynamicFontSize": {
            "min": 8,
            "max": 28,
            "fit": "vertical"
            }
        },
        "Goal 15": {
            "type": "text",
            "position": {
            "x": 110.25,
            "y": 225
            },
            "width": 28,
            "height": 30,
            "rotate": 0,
            "alignment": "center",
            "verticalAlignment": "middle",
            "fontSize": 13,
            "lineHeight": 1,
            "characterSpacing": 0,
            "fontColor": "#000000",
            "backgroundColor": "",
            "opacity": 1,
            "fontName": "Roboto",
            "dynamicFontSize": {
            "min": 8,
            "max": 28,
            "fit": "vertical"
            }
        },
        "Goal 16": {
            "type": "text",
            "position": {
            "x": 148.5,
            "y": 225
            },
            "width": 28,
            "height": 30,
            "rotate": 0,
            "alignment": "center",
            "verticalAlignment": "middle",
            "fontSize": 13,
            "lineHeight": 1,
            "characterSpacing": 0,
            "fontColor": "#000000",
            "backgroundColor": "",
            "opacity": 1,
            "fontName": "Roboto",
            "dynamicFontSize": {
            "min": 8,
            "max": 28,
            "fit": "vertical"
            }
        }
        }
    ],
    "basePdf": "data:application/pdf;base64,JVBERi0xLjQKJfbk/N8KMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovVmVyc2lvbiAvMS40Ci9QYWdlcyAyIDAgUgovU3RydWN0VHJlZVJvb3QgMyAwIFIKL01hcmtJbmZvIDQgMCBSCi9MYW5nIChlbikKL1ZpZXdlclByZWZlcmVuY2VzIDUgMCBSCj4+CmVuZG9iago2IDAgb2JqCjw8Ci9DcmVhdG9yIChDYW52YSkKL1Byb2R1Y2VyIChDYW52YSkKL0NyZWF0aW9uRGF0ZSAoRDoyMDI0MDEwMjE4MDMwNiswMCcwMCcpCi9Nb2REYXRlIChEOjIwMjQwMTAyMTgwMzA1KzAwJzAwJykKL0tleXdvcmRzIChEQUY0d29JckxHVSxCQURFcTZ4NHhaOCkKL0F1dGhvciAoUnlhbiBMeW5jaCkKL1RpdGxlICgyMDI0IEdvYWxzKQo+PgplbmRvYmoKMiAwIG9iago8PAovVHlwZSAvUGFnZXMKL0tpZHMgWzcgMCBSXQovQ291bnQgMQo+PgplbmRvYmoKMyAwIG9iago8PAovVHlwZSAvU3RydWN0VHJlZVJvb3QKL1BhcmVudFRyZWUgOCAwIFIKL1BhcmVudFRyZWVOZXh0S2V5IDEKL0sgWzkgMCBSXQovSURUcmVlIDEwIDAgUgo+PgplbmRvYmoKNCAwIG9iago8PAovTWFya2VkIHRydWUKL1N1c3BlY3RzIGZhbHNlCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9EaXNwbGF5RG9jVGl0bGUgdHJ1ZQo+PgplbmRvYmoKNyAwIG9iago8PAovVHlwZSAvUGFnZQovUmVzb3VyY2VzIDw8Ci9Qcm9jU2V0IFsvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJXQovRXh0R1N0YXRlIDExIDAgUgovWE9iamVjdCA8PAovWDYgMTIgMCBSCj4+Ci9Gb250IDEzIDAgUgo+PgovTWVkaWFCb3ggWzAuMCA3LjgyOTk4MTMgNTk1LjUgODUwLjA3OTk2XQovQ29udGVudHMgMTQgMCBSCi9TdHJ1Y3RQYXJlbnRzIDAKL1BhcmVudCAyIDAgUgovVGFicyAvUwovQmxlZWRCb3ggWzAuMCA3LjgyOTk4MTMgNTk1LjUgODUwLjA3OTk2XQovVHJpbUJveCBbMC4wIDcuODI5OTgxMyA1OTUuNSA4NTAuMDc5OTZdCi9Dcm9wQm94IFswLjAgNy44Mjk5ODEzIDU5NS41IDg1MC4wNzk5Nl0KL1JvdGF0ZSAwCi9Bbm5vdHMgW10KPj4KZW5kb2JqCjggMCBvYmoKPDwKL0xpbWl0cyBbMCAwXQovTnVtcyBbMCBbMTUgMCBSIDE2IDAgUiAxNyAwIFJdCl0KPj4KZW5kb2JqCjkgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0RvY3VtZW50Ci9MYW5nIChlbikKL1AgMyAwIFIKL0sgWzE4IDAgUl0KL0lEIChub2RlMDAwNDYwMDcpCj4+CmVuZG9iagoxMCAwIG9iago8PAovTmFtZXMgWyhub2RlMDAwNDYwMDcpIDkgMCBSIChub2RlMDAwNDYwMDkpIDE4IDAgUiAobm9kZTAwMDQ2MDEwKSAxOSAwIFIgKG5vZGUwMDA0NjAxMSkgMjAgMCBSIChub2RlMDAwNDYwMTIpIDIxIDAgUgoobm9kZTAwMDQ2MDEzKSAyMiAwIFIgKG5vZGUwMDA0NjAxNCkgMjMgMCBSIChub2RlMDAwNDYwMTUpIDI0IDAgUiAobm9kZTAwMDQ2MDE2KSAyNSAwIFIgKG5vZGUwMDA0NjA4OCkgMjYgMCBSCihub2RlMDAwNDYwODkpIDI3IDAgUiAobm9kZTAwMDQ2MDkwKSAyOCAwIFIgKG5vZGUwMDA0NjA5MSkgMjkgMCBSIChub2RlMDAwNDYwOTIpIDE1IDAgUiAobm9kZTAwMDQ2MDkzKSAzMCAwIFIKKG5vZGUwMDA0NjA5NCkgMzEgMCBSIChub2RlMDAwNDYwOTUpIDMyIDAgUiAobm9kZTAwMDQ2MDk2KSAzMyAwIFIgKG5vZGUwMDA0NjA5NykgMTYgMCBSIChub2RlMDAwNDYwOTgpIDM0IDAgUgoobm9kZTAwMDQ2MDk5KSAxNyAwIFJdCj4+CmVuZG9iagoxMSAwIG9iago8PAovRzMgMzUgMCBSCi9HNSAzNiAwIFIKL0c3IDM3IDAgUgo+PgplbmRvYmoKMTIgMCBvYmoKPDwKL0xlbmd0aCAxMTYKL1R5cGUgL1hPYmplY3QKL1N1YnR5cGUgL0Zvcm0KL1Jlc291cmNlcyA8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IFIKL0sgWzQ0IDAgUl0KL0lEIChub2RlMDAwNDYwOTkpCj4+CmVuZG9iagoxOCAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvRGl2Ci9QIDkgMCBSCi9LIFsxOSAwIFJdCi9JRCAobm9kZTAwMDQ2MDA5KQo+PgplbmRvYmoKMTkgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0RpdgovUCAxOCAwIFIKL0sgWzIwIDAgUl0KL0lEIChub2RlMDAwNDYwMTApCj4+CmVuZG9iagoyMCAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvRGl2Ci9QIDE5IDAgUgovSyBbMjEgMCBSXQovSUQgKG5vZGUwMDA0NjAxMSkKPj4KZW5kb2JqCjIxIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9EaXYKL1AgMjAgMCBSCi9LIFsyMiAwIFJdCi9JRCAobm9kZTAwMDQ2MDEyKQo+PgplbmRvYmoKMjIgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0RpdgovUCAyMSAwIFIKL0sgWzIzIDAgUl0KL0lEIChub2RlMDAwNDYwMTMpCj4+CmVuZG9iagoyMyAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvRGl2Ci9QIDIyIDAgUgovSyBbMjQgMCBSXQovSUQgKG5vZGUwMDA0NjAxNCkKPj4KZW5kb2JqCjI0IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9EaXYKL1AgMjMgMCBSCi9LIFsyNSAwIFJdCi9JRCAobm9kZTAwMDQ2MDE1KQo+PgplbmRvYmoKMjUgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0RpdgovUCAyNCAwIFIKL0sgWzI2IDAgUiAzMCAwIFJdCi9JRCAobm9kZTAwMDQ2MDE2KQo+PgplbmRvYmoKMjYgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0RpdgovUCAyNSAwIFIKL0sgWzI3IDAgUl0KL0lEIChub2RlMDAwNDYwODgpCj4+CmVuZG9iagoyNyAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvRGl2Ci9QIDI2IDAgUgovSyBbMjggMCBSXQovSUQgKG5vZGUwMDA0NjA4OSkKPj4KZW5kb2JqCjI4IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9EaXYKL1AgMjcgMCBSCi9LIFsyOSAwIFJdCi9JRCAobm9kZTAwMDQ2MDkwKQo+PgplbmRvYmoKMjkgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL1AKL1AgMjggMCBSCi9LIFsxNSAwIFJdCi9JRCAobm9kZTAwMDQ2MDkxKQo+PgplbmRvYmoKMzAgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0RpdgovUCAyNSAwIFIKL0sgWzMxIDAgUl0KL0lEIChub2RlMDAwNDYwOTMpCj4+CmVuZG9iagozMSAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvRGl2Ci9QIDMwIDAgUgovSyBbMzIgMCBSXQovSUQgKG5vZGUwMDA0NjA5NCkKPj4KZW5kb2JqCjMyIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9EaXYKL1AgMzEgMCBSCi9LIFszMyAwIFIgMzQgMCBSXQovSUQgKG5vZGUwMDA0NjA5NSkKPj4KZW5kb2JqCjMzIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9QCi9QIDMyIDAgUgovSyBbMTYgMCBSXQovSUQgKG5vZGUwMDA0NjA5NikKPj4KZW5kb2JqCjM0IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9QCi9QIDMyIDAgUgovSyBbMTcgMCBSXQovSUQgKG5vZGUwMDA0NjA5OCkKPj4KZW5kb2JqCjM1IDAgb2JqCjw8Ci9jYSAxCi9CTSAvTm9ybWFsCj4+CmVuZG9iagozNiAwIG9iago8PAovY2EgLjgzCi9CTSAvTm9ybWFsCj4+CmVuZG9iagozNyAwIG9iago8PAovQ0EgMQovY2EgMQovTEMgMAovTEogMAovTFcgMTIKL01MIDQKL1NBIHRydWUKL0JNIC9Ob3JtYWwKPj4KZW5kb2JqCjM4IDAgb2JqCjw8Ci9HNCA0NSAwIFIKPj4KZW5kb2JqCjM5IDAgb2JqCjw8Ci9UeXBlIC9Hcm91cAovUyAvVHJhbnNwYXJlbmN5Ci9JIHRydWUKPj4KZW5kb2JqCjQwIDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMwovRm9udE1hdHJpeCBbLjAwMTAwMDAwMDA1IDAgMCAtLjAwMTAwMDAwMDA1IDAgMF0KL0ZpcnN0Q2hhciAwCi9MYXN0Q2hhciA4MAovRm9udEJCb3ggWzExIDE2MiA3OTYgLTgzNV0KL0NJRFRvR0lETWFwIC9JZGVudGl0eQovVG9Vbmljb2RlIDQ2IDAgUgovRm9udERlc2NyaXB0b3IgNDcgMCBSCi9XaWR0aHMgWzUwMCAwIDAgMCAwIDAgMCAwIDAgMAowIDAgMCAwIDAgMCAwIDAgMCAwCjAgMCAwIDAgMCAwIDAgMCAwIDAKMCAwIDAgMCAwIDgxOSAwIDAgMCAwCjAgMCAwIDAgMCAwIDAgMCAwIDAKMCAwIDAgMCAwIDAgMCAwIDAgMAowIDAgMCAwIDAgMCAwIDAgMCAwCjAgMCA3MDUgMCA0MDAgMCAwIDAgMCA3NTMKNzUwXQovRW5jb2RpbmcgNDggMCBSCi9DaGFyUHJvY3MgNDkgMCBSCj4+CmVuZG9iago0MSAwIG9iago8PAovVHlwZSAvRm9udAovU3VidHlwZSAvVHlwZTAKL0Jhc2VGb250IC9CQUFBQUErVGVsZWdyYWYtQm9sZAovRW5jb2RpbmcgL0lkZW50aXR5LUgKL0Rlc2NlbmRhbnRGb250cyBbNTAgMCBSXQovVG9Vbmljb2RlIDUxIDAgUgo+PgplbmRvYmoKNDIgMCBvYmoKPDwKL1R5cGUgL01DUgovUGcgNyAwIFIKL01DSUQgMAo+PgplbmRvYmoKNDMgMCBvYmoKPDwKL1R5cGUgL01DUgovUGcgNyAwIFIKL01DSUQgMQo+PgplbmRvYmoKNDQgMCBvYmoKPDwKL1R5cGUgL01DUgovUGcgNyAwIFIKL01DSUQgMgo+PgplbmRvYmoKNDUgMCBvYmoKPDwKL0NBIDEKL2NhIDEKL0xDIDAKL0xKIDAKL0xXIDQyCi9NTCA0Ci9TQSB0cnVlCi9CTSAvTm9ybWFsCj4+CmVuZG9iago0NiAwIG9iago8PAovTGVuZ3RoIDI1NQovRmlsdGVyIC9GbGF0ZURlY29kZQo+PgpzdHJlYW0NCnicXVDLbsMg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YDI3efe06vna/JbO5lpnQ3bWOJtjKXzPbLJZMlUGNscYUaanLRV6zTb4O9rX+lMNCmVuZHN0cmVhbQplbmRvYmoKeHJlZgowIDYxCjAwMDAwMDAwMDAgNjU1MzUgZg0KMDAwMDAwMDAxNSAwMDAwMCBuDQowMDAwMDAwMzYwIDAwMDAwIG4NCjAwMDAwMDA0MTcgMDAwMDAgbg0KMDAwMDAwMDUyNSAwMDAwMCBuDQowMDAwMDAwNTc1IDAwMDAwIG4NCjAwMDAwMDAxNTIgMDAwMDAgbg0KMDAwMDAwMDYxOCAwMDAwMCBuDQowMDAwMDAxMDE1IDAwMDAwIG4NCjAwMDAwMDEwODQgMDAwMDAgbg0KMDAwMDAwMTE4NyAwMDAwMCBuDQowMDAwMDAxNjc5IDAwMDAwIG4NCjAwMDAwMDE3MzQgMDAwMDAgbg0KMDAwMDAwMjA3MiAwMDAwMCBuDQowMDAwMDAyMTE2IDAwMDAwIG4NCjAwMDAwMDYwNTkgMDAwMDAgbg0KMDAwMDAwNjE1NCAwMDAwMCBuDQowMDAwMDA2MjQ5IDAwMDAwIG4NCjAwMDAwMDYzNDQgMDAwMDAgbg0KMDAwMDAwNjQzMiAwMDAwMCBuDQowMDAwMDA2NTIxIDAwMDAwIG4NCjAwMDAwMDY2MTAgMDAwMDAgbg0KMDAwMDAwNjY5OSAwMDAwMCBuDQowMDAwMDA2Nzg4IDAwMDAwIG4NCjAwMDAwMDY4NzcgMDAwMDAgbg0KMDAwMDAwNjk2NiAwMDAwMCBuDQowMDAwMDA3MDYyIDAwMDAwIG4NCjAwMDAwMDcxNTEgMDAwMDAgbg0KMDAwMDAwNzI0MCAwMDAwMCBuDQowMDAwMDA3MzI5IDAwMDAwIG4NCjAwMDAwMDc0MTYgMDAwMDAgbg0KMDAwMDAwNzUwNSAwMDAwMCBuDQowMDAwMDA3NTk0IDAwMDAwIG4NCjAwMDAwMDc2OTAgMDAwMDAgbg0KMDAwMDAwNzc3NyAwMDAwMCBuDQowMDAwMDA3ODY0IDAwMDAwIG4NCjAwMDAwMDc5MDQgMDAwMDAgbg0KMDAwMDAwNzk0NiAwMDAwMCBuDQowMDAwMDA4MDI2IDAwMDAwIG4NCjAwMDAwMDgwNTkgMDAwMDAgbg0KMDAwMDAwODExOSAwMDAwMCBuDQowMDAwMDA4NTU1IDAwMDAwIG4NCjAwMDAwMDg3MDMgMDAwMDAgbg0KMDAwMDAwODc1NCAwMDAwMCBuDQowMDAwMDA4ODA1IDAwMDAwIG4NCjAwMDAwMDg4NTYgMDAwMDAgbg0KMDAwMDAwODkzNiAwMDAwMCBuDQowMDAwMDA5MjY2IDAwMDAwIG4NCjAwMDAwMDk0MTAgMDAwMDAgbg0KMDAwMDAwOTc5NCAwMDAwMCBuDQowMDAwMDA5ODg3IDAwMDAwIG4NCjAwMDAwMTAyMTMgMDAwMDAgbg0KMDAwMDAxMDYwOSAwMDAwMCBuDQowMDAwMDEwODExIDAwMDAwIG4NCjAwMDAwMTEyNzIgMDAwMDAgbg0KMDAwMDAxMTc5OSAwMDAwMCBuDQowMDAwMDEyMTgyIDAwMDAwIG4NCjAwMDAwMTI2OTcgMDAwMDAgbg0KMDAwMDAxMjk0NSAwMDAwMCBuDQowMDAwMDEzMTQ3IDAwMDAwIG4NCjAwMDAwMTMyMjIgMDAwMDAgbg0KdHJhaWxlcgo8PAovUm9vdCAxIDAgUgovSW5mbyA2IDAgUgovSUQgWzwzQzkzQzc3RkNGNkE4Q0Q4ODZGNDIwNjZDNjg0OUY4MT4gPDNDOTNDNzdGQ0Y2QThDRDg4NkY0MjA2NkM2ODQ5RjgxPl0KL1NpemUgNjEKPj4Kc3RhcnR4cmVmCjE1MzY2CiUlRU9GCg=="
    };
    const plugins = { text, image, qrcode: barcodes.qrcode };
    const inputs = [
    {
        "Goal 1": goals[0],
        "Goal 2": goals[1],
        "Goal 3": goals[2],
        "Goal 4": goals[3],
        "Goal 5": goals[4],
        "Goal 6": goals[5],
        "Goal 7": goals[6],
        "Goal 8": goals[7],
        "Goal 9": goals[8],
        "Goal 10": goals[9],
        "Goal 11": goals[10],
        "Goal 12": goals[11],
        "Goal 13": goals[12],
        "Goal 14": goals[13],
        "Goal 15": goals[14],
        "Goal 16": goals[15]
    }
    ];

    const pdf = await generate({ template, plugins, inputs });
    //   return pdf;

    // Node.js
    //   fs.writeFileSync(path.join(__dirname, 'test.pdf'), pdf);

    // Browser
    const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
    window.open(URL.createObjectURL(blob));
})()};