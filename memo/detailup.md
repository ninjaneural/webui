# 이미지 정보

긍정 프롬프트

```
(masterpiece,best quality:1.2), highres, 8k, UHD, (complex detail), (detailed face:1.2),
cinematic light, pretty, (full body:1.2), seoul, on the water,
(1girl, solo, pretty, 20 years old, long, curly hair, artist, floating_castle, fur coat, leather gloves, shirt,leather pants,walking)
```

부정 프롬프트

```
(worst quality,low quality:1.2),(nsfw,nude), paintings, sketches, lowres, monochrome,grayscale
```

샘플러, 모델, 시드

```
Steps: 24, Sampler: DPM++ SDE Karras, CFG scale: 8, Seed: 1, Size: 768x512, Model hash: 2308dce6ab, Model: perfectWorld_perfectWorld-fp16, Denoising strength: 0.4, Clip skip: 2
```

# 구글드라이브 연결하는 방법

https://youtu.be/HFG1DXs-zak

AI영상만들기 초반 참고 해서

```
from google.colab import drive
drive.mount('/content/drive')
```

이거 맨위에 붙여넣고 설정따라하면되요
