
# 샘플이미지

<img src="./comfyui_posechange/image1.jpg" width="480"/>
<img src="./comfyui_posechange/image2.jpg" width="480"/>
<img src="./comfyui_posechange/image3.jpg" width="480"/>
<img src="./comfyui_posechange/image4.jpg" width="480"/>
<img src="./comfyui_posechange/image5.jpg" width="480"/>
<img src="./comfyui_posechange/image6.jpg" width="480"/>
<img src="./comfyui_posechange/image7.jpg" width="480"/>
<img src="./comfyui_posechange/image8.jpg" width="480"/>
<img src="./comfyui_posechange/image9.jpg" width="480"/>

# 워크플로우

기본 워크플로우

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_posechange/workflow1.json>

SDXL버전

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_posechange/workflow2.json>

(마우스 오른쪽버튼을 누르고 링크 저장을 눌러주세요)

# FaceID, ReActor 설치관련은 이 문서를 확인해주세요
<https://github.com/ninjaneural/webui/blob/master/memo/comfyui_faceswap.md>


# IPAdapter_plus

* 커스텀노드 ComfyUI_IPAdapter_plus

<https://github.com/cubiq/ComfyUI_IPAdapter_plus>

* plus_sd15 모델 다운로드

<https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter-plus_sd15.bin>

> [v1 legecy] <strike>ComfyUI 설치폴더/custom_nodes/ComfyUI_IPAdapter_plus/models 이곳에 복사</strike>  
> [2024-03-26 v2 적용] ComfyUI 설치폴더/models/ipadapter 이곳에 복사 (폴더 없으면 생성)

<https://huggingface.co/h94/IP-Adapter/tree/main/models>

> 그외에 기본, light, face, full 모델들

* clip vision 모델 (CLIP-ViT-H-14-laion2B-s32B-b79K) 다운로드 

<https://huggingface.co/h94/IP-Adapter/resolve/main/models/image_encoder/model.safetensors>

> 설치폴더/models/clip_vision 이곳에 복사  
> 파일명을 CLIP-ViT-H-14-laion2B-s32B-b79K.safetensors 으로 변경해주세요


# IPAdapter_plus (SDXL)

* plus_sdxl_vit-h 모델 다운로드

<https://huggingface.co/h94/IP-Adapter/resolve/main/sdxl_models/ip-adapter-plus_sdxl_vit-h.safetensors>

> [v1 legecy] <strike>ComfyUI 설치폴더/custom_nodes/ComfyUI_IPAdapter_plus/models 이곳에 복사</strike>  
> [2024-03-26 v2 적용] ComfyUI 설치폴더/models/ipadapter 이곳에 복사 (폴더 없으면 생성)


# ControlNet 모델

<https://huggingface.co/lllyasviel/ControlNet-v1-1/tree/main> (오피셜)

<https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/tree/main> (fp16버전:저용량)

> 다운받아서 models/controlnet 에 저장  
> 이 영상에서는 control_v11p_sd15_openpose_fp16.safetensors 만 받으셔도되요~ 


# ControlNet (SDXL)

* OpenPose XL

<https://huggingface.co/thibaud/controlnet-openpose-sdxl-1.0/resolve/main/OpenPoseXL2.safetensors>

> ComfyUI 설치폴더/models/controlnet 이곳에 복사


# 그외 커스텀노드

<https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes> 

> CR_ 시리즈 노드

<https://github.com/Fannovel16/comfyui_controlnet_aux>

> ControlNet 프리프로세서 노드

<https://github.com/pythongosssss/ComfyUI-WD14-Tagger>

> Tagger 이미지에서 프롬프트 추출

<https://github.com/pythongosssss/ComfyUI-Custom-Scripts>

> pysssss 시리즈 노드 / 하단 이미지 피드
