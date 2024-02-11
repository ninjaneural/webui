# 워크플로우

* 기본 워프플로우

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_anidiff_lora/workflow1.json>

* FaceDetailer

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_anidiff_lora/workflow2.json>

* FaceDetailer대신 SimpleDetector + Detailer (AnimateDiff)

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_anidiff_lora/workflow3.json>

* FaceDetailer만 따로

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_anidiff_lora/workflow4.json> 

(마우스 오른쪽버튼을 누르고 링크 저장을 눌러주세요)


# 사용된 커스텀노드

<https://github.com/ltdrdata/ComfyUI-Manager> 

<https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite>

<https://github.com/ltdrdata/ComfyUI-Impact-Pack>

<https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved>

<https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet>

<https://github.com/Fannovel16/comfyui_controlnet_aux>


# LCM-LoRA 모델 다운로드

<https://huggingface.co/latent-consistency/lcm-lora-sdv1-5/resolve/main/pytorch_lora_weights.safetensors>

    - lcm-lora-sdv1-5.safetensors 파일명을 변경해주세요
    - models/loras 에 저장해주세요

# AnimateDiff 모델 (선택)

<https://huggingface.co/CiaraRowles/TemporalDiff/resolve/main/temporaldiff-v1-animatediff.ckpt>

    - 다른 모델과 큰 차이는 없는거 같아요
    - custom_nodes/ComfyUI-AnimateDiff-Evolved/models 이곳에 저장  


## SDXL용

<https://huggingface.co/latent-consistency/lcm-lora-sdxl/resolve/main/pytorch_lora_weights.safetensors>

    - lcm-lora-sdxl.safetensors 파일명을 변경해주세요
    - models/loras 에 저장해주세요

# 프롬프트 정보

긍정 프롬프트
```
(masterpiece, best quality, high quality:1.2), 8k, extremely detailed, girl, cute, (smile:0.7)"
```

부정 프롬프트
```
(worst quality, low quality:1.2), (makeup, mole), (nsfw, nude)
```


# ComfyUI-VideoHelperSuite 노드가 나타나지 않는경우 

* 실행할때 아래 메세지가 나오는지 확인해보세요~

```
no module named 'cv2'
```

1. Manger 이용 방법

> Manager 메뉴에서 Install PIP Packages 를 누르고 opencv-python 를 입력해서 설치해보세요 (설치 완료까지 대기후 재시작)

<img src="./comfyui_anidiff_lora/manager.png"/>

2. 직접설치 방법

> 윈도우의 경우 아래처럼 "명령 프롬프트"에서 comfyui 설치폴더로 이동후 opencv-python을 직접 설치해주세요

```
python_embeded\python -m pip install opencv-python
```

<img src="./comfyui_anidiff_lora/opencv.png"/>

