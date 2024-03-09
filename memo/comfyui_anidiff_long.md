# 영상링크

<https://youtu.be/6e0ZQR6DODE>


# 이전 영상 설명서

<https://github.com/ninjaneural/webui/blob/master/memo/comfyui_anidiff_lora.md>

AnimateDiff+LCM 관련해서는 이 설명서를 참고해주세요~


# 워크플로우

* Images (Path)

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_anidiff_long/workflow1.json>

* Video (Path)

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_anidiff_long/workflow2.json>

* SimpleDetector + Detailer (AnimateDiff)

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_anidiff_long/workflow3.json>

(마우스 오른쪽버튼을 누르고 링크 저장을 눌러주세요)


# 사용된 커스텀노드

<https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite>

> 비디오 저장

<https://github.com/ltdrdata/ComfyUI-Impact-Pack>

> 디테일러

<https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved>

> AnimateDiff

<https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet>

> AnimateDiff + ControlNet

<https://github.com/Fannovel16/comfyui_controlnet_aux>

> ControlNet Preprocessors

<https://github.com/pythongosssss/ComfyUI-Custom-Scripts>

> Constrain Images


# 파이썬 스크립트

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_anidiff_long/script.zip>

> extract.py 실행시에 ffmpeg-python 모듈이 없다고 에러가 나면,   
> pip install ffmpeg-python 를 실행해주세요  


# 파이썬 설치방법

<https://github.com/ninjaneural/webui/blob/master/memo/python_install.md>



# ffmpeg 설치방법

<https://github.com/ninjaneural/webui/blob/master/memo/ffmpeg_install.md>



# 영상, 이미지 변환 ffmpeg 명령어

- 영상을 이미지로 변환 (비디오 -> 이미지들, 30프레임)
- input.mp4 영상파일을 input 폴더에 7자리 일련번호의 PNG 이미지들로 변환
- input 폴더를 미리 만들어놔야해요~

```
ffmpeg -i "./input.mp4" -vf fps=30 "./input/%07d.png"
```

