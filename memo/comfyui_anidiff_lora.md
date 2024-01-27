# 워크플로우

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_anidiff_lora/default.json>

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_anidiff_lora/workflow1.json>

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_anidiff_lora/workflow2.json>

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_anidiff_lora/workflow3.json> (페이스디테일러만 따로 적용)

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

