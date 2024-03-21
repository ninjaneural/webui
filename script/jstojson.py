import json
import chompjs


# 주어진 JavaScript 형식의 텍스트
js_text = '''
[
    {
        name: 'Realistic Stock Photo',
        type: '실사',
        model: 'https://civitai.com/models/139565/realistic-stock-photo',
        ipynb: 'realistic_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/294470',
        checkpoint_file: 'realistic_stock_photo_v20.safetensors',
        bakedVAE: true,
    },
    {
        name: 'animaPencil XL',
        type: '2D',
        model: 'https://civitai.com/models/261336/animapencil-xl',
        ipynb: 'anima_pencil_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/323674',
        checkpoint_file: 'anima_pencil_xl_v150.safetensors',
        bakedVAE: true,
    },
]
'''

# JSON 형식으로 변환
json_data = chompjs.parse_js_object(js_text)

# JSON 형식으로 출력
print(json.dumps(json_data, indent=4, ensure_ascii=False))