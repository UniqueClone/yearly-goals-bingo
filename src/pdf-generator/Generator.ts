import { text, image, barcodes } from "@pdfme/schemas";
import { generate } from "@pdfme/generator";
import { formatName, shuffleGoals, validateGoals } from "./GeneratorUtils";

export const Generator = (name: string, goals: string[]) => {
    name = formatName(name);
    validateGoals(goals);
    shuffleGoals(goals);

(async () => {
  const template = {
  "schemas": [
    {
      "Goal 1": {
        "type": "text",
        "position": {
          "x": 33,
          "y": 89
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
          "max": 14,
          "fit": "vertical"
        }
      },
      "Goal 2": {
        "type": "text",
        "position": {
          "x": 72,
          "y": 89
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
          "max": 14,
          "fit": "vertical"
        }
      },
      "Goal 3": {
        "type": "text",
        "position": {
          "x": 110.25,
          "y": 89
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
          "max": 14,
          "fit": "vertical"
        }
      },
      "Goal 4": {
        "type": "text",
        "position": {
          "x": 148.5,
          "y": 89
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
          "max": 14,
          "fit": "vertical"
        }
      },
      "Goal 5": {
        "type": "text",
        "position": {
          "x": 33,
          "y": 134
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
          "max": 14,
          "fit": "vertical"
        }
      },
      "Goal 6": {
        "type": "text",
        "position": {
          "x": 72,
          "y": 134
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
          "max": 14,
          "fit": "vertical"
        }
      },
      "Goal 7": {
        "type": "text",
        "position": {
          "x": 110.25,
          "y": 134
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
          "max": 14,
          "fit": "vertical"
        }
      },
      "Goal 8": {
        "type": "text",
        "position": {
          "x": 148.5,
          "y": 134
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
          "max": 14,
          "fit": "vertical"
        }
      },
      "Goal 9": {
        "type": "text",
        "position": {
          "x": 33,
          "y": 179
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
          "max": 14,
          "fit": "vertical"
        }
      },
      "Goal 10": {
        "type": "text",
        "position": {
          "x": 72,
          "y": 179
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
          "max": 14,
          "fit": "vertical"
        }
      },
      "Goal 11": {
        "type": "text",
        "position": {
          "x": 110.25,
          "y": 179
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
          "max": 14,
          "fit": "vertical"
        }
      },
      "Goal 12": {
        "type": "text",
        "position": {
          "x": 148.5,
          "y": 179
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
          "max": 14,
          "fit": "vertical"
        }
      },
      "Goal 13": {
        "type": "text",
        "position": {
          "x": 33,
          "y": 224
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
          "max": 14,
          "fit": "vertical"
        }
      },
      "Goal 14": {
        "type": "text",
        "position": {
          "x": 72,
          "y": 224
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
          "max": 14,
          "fit": "vertical"
        }
      },
      "Goal 15": {
        "type": "text",
        "position": {
          "x": 110.25,
          "y": 224
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
          "max": 14,
          "fit": "vertical"
        }
      },
      "Goal 16": {
        "type": "text",
        "position": {
          "x": 148.5,
          "y": 224
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
          "max": 14,
          "fit": "vertical"
        }
      },
      "Name": {
        "type": "text",
        "position": {
          "x": 0.04,
          "y": 22.61
        },
        "width": 210.08,
        "height": 16.6,
        "rotate": 0,
        "alignment": "center",
        "verticalAlignment": "middle",
        "fontSize": 13,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#5087ab",
        "backgroundColor": "",
        "opacity": 1,
        "fontName": "Telegraf",
        "dynamicFontSize": {
          "min": 20,
          "max": 40,
          "fit": "vertical"
        }
      }
    }
  ],
  "basePdf": "data:application/pdf;base64,JVBERi0xLjQKJfbk/N8KMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovVmVyc2lvbiAvMS40Ci9QYWdlcyAyIDAgUgovU3RydWN0VHJlZVJvb3QgMyAwIFIKL01hcmtJbmZvIDQgMCBSCi9MYW5nIChlbikKL1ZpZXdlclByZWZlcmVuY2VzIDUgMCBSCj4+CmVuZG9iago2IDAgb2JqCjw8Ci9DcmVhdG9yIChDYW52YSkKL1Byb2R1Y2VyIChDYW52YSkKL0NyZWF0aW9uRGF0ZSAoRDoyMDI0MDExMTE2MjIxNSswMCcwMCcpCi9Nb2REYXRlIChEOjIwMjQwMTExMTYyMjE1KzAwJzAwJykKL0tleXdvcmRzIChEQUY0d29JckxHVSxCQURFcTZ4NHhaOCkKL0F1dGhvciAoUnlhbiBMeW5jaCkKL1RpdGxlICgyMDI0IEdvYWxzKQo+PgplbmRvYmoKMiAwIG9iago8PAovVHlwZSAvUGFnZXMKL0tpZHMgWzcgMCBSXQovQ291bnQgMQo+PgplbmRvYmoKMyAwIG9iago8PAovVHlwZSAvU3RydWN0VHJlZVJvb3QKL1BhcmVudFRyZWUgOCAwIFIKL1BhcmVudFRyZWVOZXh0S2V5IDEKL0sgWzkgMCBSXQovSURUcmVlIDEwIDAgUgo+PgplbmRvYmoKNCAwIG9iago8PAovTWFya2VkIHRydWUKL1N1c3BlY3RzIGZhbHNlCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9EaXNwbGF5RG9jVGl0bGUgdHJ1ZQo+PgplbmRvYmoKNyAwIG9iago8PAovVHlwZSAvUGFnZQovUmVzb3VyY2VzIDw8Ci9Qcm9jU2V0IFsvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJXQovRXh0R1N0YXRlIDExIDAgUgovWE9iamVjdCA8PAovWDYgMTIgMCBSCj4+Ci9Gb250IDEzIDAgUgo+PgovTWVkaWFCb3ggWzAuMCA3LjgyOTk4MTMgNTk1LjUgODUwLjA3OTk2XQovQ29udGVudHMgMTQgMCBSCi9TdHJ1Y3RQYXJlbnRzIDAKL1BhcmVudCAyIDAgUgovVGFicyAvUwovQmxlZWRCb3ggWzAuMCA3LjgyOTk4MTMgNTk1LjUgODUwLjA3OTk2XQovVHJpbUJveCBbMC4wIDcuODI5OTgxMyA1OTUuNSA4NTAuMDc5OTZdCi9Dcm9wQm94IFswLjAgNy44Mjk5ODEzIDU5NS41IDg1MC4wNzk5Nl0KL1JvdGF0ZSAwCi9Bbm5vdHMgW10KPj4KZW5kb2JqCjggMCBvYmoKPDwKL0xpbWl0cyBbMCAwXQovTnVtcyBbMCBbMTUgMCBSIDE2IDAgUl0KXQo+PgplbmRvYmoKOSAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvRG9jdW1lbnQKL0xhbmcgKGVuKQovUCAzIDAgUgovSyBbMTcgMCBSXQovSUQgKG5vZGUwMDAwMjgxMCkKPj4KZW5kb2JqCjEwIDAgb2JqCjw8Ci9OYW1lcyBbKG5vZGUwMDAwMjgxMCkgOSAwIFIgKG5vZGUwMDAwMjgxMikgMTcgMCBSIChub2RlMDAwMDI4MTMpIDE4IDAgUiAobm9kZTAwMDAyODE0KSAxOSAwIFIgKG5vZGUwMDAwMjgxNSkgMjAgMCBSCihub2RlMDAwMDI4MTYpIDIxIDAgUiAobm9kZTAwMDAyODE3KSAyMiAwIFIgKG5vZGUwMDAwMjgxOCkgMjMgMCBSIChub2RlMDAwMDI4MTkpIDI0IDAgUiAobm9kZTAwMDAyODkxKSAyNSAwIFIKKG5vZGUwMDAwMjg5MikgMjYgMCBSIChub2RlMDAwMDI4OTMpIDI3IDAgUiAobm9kZTAwMDAyODk0KSAyOCAwIFIgKG5vZGUwMDAwMjg5NSkgMTUgMCBSIChub2RlMDAwMDI4OTYpIDI5IDAgUgoobm9kZTAwMDAyODk3KSAzMCAwIFIgKG5vZGUwMDAwMjg5OCkgMzEgMCBSIChub2RlMDAwMDI4OTkpIDE2IDAgUl0KPj4KZW5kb2JqCjExIDAgb2JqCjw8Ci9HMyAzMiAwIFIKL0c1IDMzIDAgUgovRzcgMzQgMCBSCj4+CmVuZG9iagoxMiAwIG9iago8PAovTGVuZ3RoIDExNgovVHlwZSAvWE9iamVjdAovU3VidHlwZSAvRm9ybQovUmVzb3VyY2VzIDw8Ci9Qcm9jU2V0IFsvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJXQovRXh0R1N0YXRlIDM1IDAgUgo+PgovQkJv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ODE0KQo+PgplbmRvYmoKMjAgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0RpdgovUCAxOSAwIFIKL0sgWzIxIDAgUl0KL0lEIChub2RlMDAwMDI4MTUpCj4+CmVuZG9iagoyMSAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvRGl2Ci9QIDIwIDAgUgovSyBbMjIgMCBSXQovSUQgKG5vZGUwMDAwMjgxNikKPj4KZW5kb2JqCjIyIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9EaXYKL1AgMjEgMCBSCi9LIFsyMyAwIFJdCi9JRCAobm9kZTAwMDAyODE3KQo+PgplbmRvYmoKMjMgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0RpdgovUCAyMiAwIFIKL0sgWzI0IDAgUl0KL0lEIChub2RlMDAwMDI4MTgpCj4+CmVuZG9iagoyNCAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvRGl2Ci9QIDIzIDAgUgovSyBbMjUgMCBSIDI5IDAgUl0KL0lEIChub2RlMDAwMDI4MTkpCj4+CmVuZG9iagoyNSAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvRGl2Ci9QIDI0IDAgUgovSyBbMjYgMCBSXQovSUQgKG5vZGUwMDAwMjg5MSkKPj4KZW5kb2JqCjI2IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9EaXYKL1AgMjUgMCBSCi9LIFsyNyAwIFJdCi9JRCAobm9kZTAwMDAyODkyKQo+PgplbmRvYmoKMjcgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0RpdgovUCAyNiAwIFIKL0sgWzI4IDAgUl0KL0lEIChub2RlMDAwMDI4OTMpCj4+CmVuZG9iagoyOCAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvUAovUCAyNyAwIFIKL0sgWzE1IDAgUl0KL0lEIChub2RlMDAwMDI4OTQpCj4+CmVuZG9iagoyOSAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvRGl2Ci9QIDI0IDAgUgovSyBbMzAgMCBSXQovSUQgKG5vZGUwMDAwMjg5NikKPj4KZW5kb2JqCjMwIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9EaXYKL1AgMjkgMCBSCi9LIFszMSAwIFJdCi9JRCAobm9kZTAwMDAyODk3KQo+PgplbmRvYmoKMzEgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL1AKL1AgMzAgMCBSCi9LIFsxNiAwIFJdCi9JRCAobm9kZTAwMDAyODk4KQo+PgplbmRvYmoKMzIgMCBvYmoKPDwKL2NhIDEKL0JNIC9Ob3JtYWwKPj4KZW5kb2JqCjMzIDAgb2JqCjw8Ci9jYSAuODMKL0JNIC9Ob3JtYWwKPj4KZW5kb2JqCjM0IDAgb2JqCjw8Ci9DQSAxCi9jYSAxCi9MQyAwCi9MSiAwCi9MVyAxMgovTUwgNAovU0EgdHJ1ZQovQk0gL05vcm1hbAo+PgplbmRvYmoKMzUgMCBvYmoKPDwKL0c0IDQxIDAgUgo+PgplbmRvYmoKMzYgMCBvYmoKPDwKL1R5cGUgL0dyb3VwCi9TIC9UcmFuc3BhcmVuY3kKL0kgdHJ1ZQo+PgplbmRvYmoKMzcgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUzCi9Gb250TWF0cml4IFsuMDAxMDAwMDAwMDUgMCAwIC0uMDAxMDAwMDAwMDUgMCAwXQovRmlyc3RDaGFyIDAKL0xhc3RDaGFyIDgwCi9Gb250QkJveCBbMTEgMTYyIDc5NiAtODM1XQovQ0lEVG9HSURNYXAgL0lkZW50aXR5Ci9Ub1VuaWNvZGUgNDIgMCBSCi9Gb250RGVzY3JpcHRvciA0MyAwIFIKL1dpZHRocyBbNTAwIDAgMCAwIDAgMCAwIDAgMCAwCjAgMCAwIDAgMCAwIDAgMCAwIDAKMCAwIDAgMCAwIDAgMCAwIDAgMAowIDAgMCAwIDAgODE5IDAgMCAwIDAKMCAwIDAgMCAwIDAgMCAwIDAgMAowIDAgMCAwIDAgMCAwIDAgMCAwCjAgMCAwIDAgMCAwIDAgMCAwIDAKMCAwIDcwNSAwIDQwMCAwIDAgMCAwIDc1Mwo3NTBdCi9FbmNvZGluZyA0NCAwIFIKL0NoYXJQcm9jcyA0NSAwIFIKPj4KZW5kb2JqCjM4IDAgb2JqCjw8Ci9UeXBlIC9Gb250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MDAwMDAxNjYxIDAwMDAwIG4NCjAwMDAwMDE5OTkgMDAwMDAgbg0KMDAwMDAwMjA0MyAwMDAwMCBuDQowMDAwMDA1ODU5IDAwMDAwIG4NCjAwMDAwMDU5NTQgMDAwMDAgbg0KMDAwMDAwNjA0OSAwMDAwMCBuDQowMDAwMDA2MTM3IDAwMDAwIG4NCjAwMDAwMDYyMjYgMDAwMDAgbg0KMDAwMDAwNjMxNSAwMDAwMCBuDQowMDAwMDA2NDA0IDAwMDAwIG4NCjAwMDAwMDY0OTMgMDAwMDAgbg0KMDAwMDAwNjU4MiAwMDAwMCBuDQowMDAwMDA2NjcxIDAwMDAwIG4NCjAwMDAwMDY3NjcgMDAwMDAgbg0KMDAwMDAwNjg1NiAwMDAwMCBuDQowMDAwMDA2OTQ1IDAwMDAwIG4NCjAwMDAwMDcwMzQgMDAwMDAgbg0KMDAwMDAwNzEyMSAwMDAwMCBuDQowMDAwMDA3MjEwIDAwMDAwIG4NCjAwMDAwMDcyOTkgMDAwMDAgbg0KMDAwMDAwNzM4NiAwMDAwMCBuDQowMDAwMDA3NDI2IDAwMDAwIG4NCjAwMDAwMDc0NjggMDAwMDAgbg0KMDAwMDAwNzU0OCAwMDAwMCBuDQowMDAwMDA3NTgxIDAwMDAwIG4NCjAwMDAwMDc2NDEgMDAwMDAgbg0KMDAwMDAwODA3NyAwMDAwMCBuDQowMDAwMDA4MjIzIDAwMDAwIG4NCjAwMDAwMDgyNzQgMDAwMDAgbg0KMDAwMDAwODMyNSAwMDAwMCBuDQowMDAwMDA4NDA1IDAwMDAwIG4NCjAwMDAwMDg3MzUgMDAwMDAgbg0KMDAwMDAwODg3OSAwMDAwMCBuDQowMDAwMDA5MjYzIDAwMDAwIG4NCjAwMDAwMDkzNTYgMDAwMDAgbg0KMDAwMDAwOTY0NyAwMDAwMCBuDQowMDAwMDA5OTg5IDAwMDAwIG4NCjAwMDAwMTAxOTEgMDAwMDAgbg0KMDAwMDAxMDY1MiAwMDAwMCBuDQowMDAwMDExMTc5IDAwMDAwIG4NCjAwMDAwMTE1NjIgMDAwMDAgbg0KMDAwMDAxMjA3NyAwMDAwMCBuDQowMDAwMDEyMzI1IDAwMDAwIG4NCjAwMDAwMTI1NzEgMDAwMDAgbg0KMDAwMDAxMjY0NiAwMDAwMCBuDQp0cmFpbGVyCjw8Ci9Sb290IDEgMCBSCi9JbmZvIDYgMCBSCi9JRCBbPDgxNENFNTc5QTVDOTVBNDQyNDA0ODk5N0VDQjJGOEQ0PiA8ODE0Q0U1NzlBNUM5NUE0NDI0MDQ4OTk3RUNCMkY4RDQ+XQovU2l6ZSA1Nwo+PgpzdGFydHhyZWYKMTUwNDkKJSVFT0YK"
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
        "Goal 16": goals[15],
        "Name": name
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