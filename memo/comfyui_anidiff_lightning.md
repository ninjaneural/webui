# 영상링크

<https://youtu.be/2mh_lQWkFvk>


# 이전 영상 설명서

<https://github.com/ninjaneural/webui/blob/master/memo/comfyui_anidiff_lora.md> (SD1.5 AnimateDiff + LCM)

AnimateDiff+LCM 관련해서는 이 설명서를 참고해주세요~


# 워크플로우

* 시작 워크플로우 (SD1.5 LCM)

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_anidiff_lora/workflow3-1.json>

* 워크플로우1 (SDXL Lightning)

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_anidiff_lightning/workflow1.json>

* 워크플로우2 (SDXL Lightning + 추가로라)

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_anidiff_lightning/workflow1.json>

(마우스 오른쪽버튼을 누르고 링크 저장을 눌러주세요)


# 사용된 커스텀노드

<https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite>

> 비디오 저장

<https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved>

> AnimateDiff

<https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet>

> AnimateDiff + ControlNet

<https://github.com/Fannovel16/comfyui_controlnet_aux>

> ControlNet Preprocessors


# AnimateDiff HotShotXL모델

<https://huggingface.co/hotshotco/Hotshot-XL/tree/main>


# SDXL Lightningn 로라

<https://huggingface.co/ByteDance/SDXL-Lightning> (홈페이지)

<https://huggingface.co/ByteDance/SDXL-Lightning/resolve/main/sdxl_lightning_2step_lora.safetensors>

<https://huggingface.co/ByteDance/SDXL-Lightning/resolve/main/sdxl_lightning_4step_lora.safetensors>

<https://huggingface.co/ByteDance/SDXL-Lightning/resolve/main/sdxl_lightning_8step_lora.safetensors>


# 체크포인트

realcartoonXL <https://civitai.com/models/125907/realcartoon-xl>

# 사용한 로라

princess_xl_v1

EnvyPaperXL01

ral-toiletpaper-sdxl

je11y


# 프롬프트 정보

긍정 프롬프트
```
princess ariel, pink dress <lora:princess_xl_v1:0.6>

princess elsa, back view, skirt <lora:princess_xl_v1:0.6>

statue, woman,

figure made out of white jelly (je11y) <lora:je11y:0.9>

paper strip diorama, woman, beautiful, warmly lit interior <lora:EnvyPaperXL01:1>

girl made of toilet paper <lora:ral-toiletpaper-sdxl:1>

girl,the god speed running as fast as the speed of light, electro thunder strike effect as a background, using the highest render computational, very complex and detailed, wearing the flash suit on
```

부정 프롬프트
```
nsfw, 3D, CG, stop-motion, photo-realistic,
```

# ControlNet SDXL 모델

<https://huggingface.co/lllyasviel/sd_control_collection/tree/main> (SDXL 모음)

<https://huggingface.co/thibaud/controlnet-openpose-sdxl-1.0/tree/main>

<https://huggingface.co/TencentARC/t2i-adapter-lineart-sdxl-1.0/tree/main>

<https://huggingface.co/TencentARC/t2i-adapter-lineart-sdxl-1.0/tree/main>

<https://huggingface.co/TencentARC/t2i-adapter-depth-zoe-sdxl-1.0/tree/main>

openpose, lineart

> 다운받아서 models/controlnet 에 저장  
