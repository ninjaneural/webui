
# 샘플이미지

<img src="./comfyui_dreamtalk/image1.jpg" width="480"/>
<img src="./comfyui_dreamtalk/image2.jpg" width="480"/>
<img src="./comfyui_dreamtalk/image3.jpg" width="480"/>
<img src="./comfyui_dreamtalk/image4.jpg" width="480"/>
<img src="./comfyui_dreamtalk/image5.jpg" width="480"/>

# 샘플 mp3

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_dreamtalk/hello.mp3>

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_dreamtalk/lesserafim_victory_sound1.mp3>

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_dreamtalk/inpainting.mp3>

(마우스 오른쪽버튼을 누르고 링크 저장을 눌러주세요)


# 워크플로우

워크플로우

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_dreamtalk/workflow1.json> (기본 워크플로우)

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_dreamtalk/workflow2.json> (이미지 합성)

(마우스 오른쪽버튼을 누르고 링크 저장을 눌러주세요)


# 커스텀노드

<https://github.com/neuralninja22/ComfyUI_Dreamtalk>

> Dreamtalk 커스텀노드

<https://github.com/Gourieff/comfyui-reactor-node>

> 리액터 노드 (여기에선 facerestore용으로만 사용)

* facerestore 모델 다운로드 (없으면 다운로드)

<https://huggingface.co/ninjaneural/webui/resolve/main/models/GFPGANv1.4.pth>

> /models/facerestore_models 에 다운로드

<https://github.com/pythongosssss/ComfyUI-Custom-Scripts>

> pysssss 커스텀 스크립트, 이미지 최대값 리사이즈

<https://github.com/cubiq/ComfyUI_essentials>

> 이미지, 마스크 처리

<https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite>

> 영상 저장


# 윈도우 dreamtalk 설치 모듈 문제

* dlib 배포 패키지 설치 (dlib-19.24.1)

```
.\python_embeded\python -m pip install https://github.com/z-mahmud22/Dlib_Windows_Python3.x/raw/main/dlib-19.24.1-cp311-cp311-win_amd64.whl
```

* pyav 배포 패키지 설치 (av-12.0.0)

```
.\python_embeded\python -m pip install https://pypi.tuna.tsinghua.edu.cn/packages/8a/51/0e5f5e31d834061f5b17ebf53570539f8ad124412b3dbdd5d138f36721a0/av-12.0.0-cp311-cp311-win_amd64.whl#sha256=6aec88e41a498b1e01e2dce5371557e20f9a51aae0c16decc5924ec0be2e22b6
```

* insightface 배포 패키지 설치 (insightface-0.7.3)

```
.\python_embeded\python -m pip install https://github.com/Gourieff/Assets/raw/main/Insightface/insightface-0.7.3-cp311-cp311-win_amd64.whl
```
