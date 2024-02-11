

# 기본 커스텀 노드

* ComfyUI-Manager

> 커스텀 노드 설치및 업데이트 편하게 관리

<https://github.com/ltdrdata/ComfyUI-Manager> 



# 기본 업스케일 모델

* 4xUltraSharp

> 다운받아서 models/upscale_models 에 저장

<https://huggingface.co/lokCX/4x-Ultrasharp/resolve/main/4x-UltraSharp.pth>



# 컨트롤넷1.1 기본 모델들 (SD1.5)

> 다운받아서 models/controlnet 에 저장

<https://huggingface.co/lllyasviel/ControlNet-v1-1/tree/main>



# module이 없어서 노드가 나타나지 않는경우 module 설치 방법

* 실행시 (FAILED) 노드

```
no module named 'xxxxx'
```

1. Manger 이용 방법

> Manager 메뉴에서 Install PIP Packages 를 누르고 module명을 입력해서 설치해보세요 (설치 완료까지 대기후 재시작)

<img src="./comfyui_anidiff_lora/manager.png"/>


2. 직접설치 방법

> 윈도우의 경우 아래처럼 "명령 프롬프트"에서 comfyui 설치폴더로 이동후 직접 설치해주세요

eg.) opencv-python 모듈을 설치할 경우
```
python_embeded\python -m pip install opencv-python
```

<img src="./comfyui_anidiff_lora/opencv.png"/>

