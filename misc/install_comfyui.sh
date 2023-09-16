pip install xformers!=0.0.18 -r requirements.txt --extra-index-url https://download.pytorch.org/whl/cu118 --extra-index-url https://download.pytorch.org/whl/cu117

git clone https://github.com/comfyanonymous/ComfyUI /content/$1

if [ $2 == True ]; then
  cd /content/$1/custom_nodes
  git clone https://github.com/ltdrdata/ComfyUI-Impact-Pack
fi

cd /content/$1

if [ $3 == True ]; then
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_openpose_fp16.safetensors -d ./models/controlnet -o control_v11p_sd15_openpose_fp16.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_lineart_fp16.safetensors -d ./models/controlnet -o control_v11p_sd15_lineart_fp16.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_softedge_fp16.safetensors -d ./models/controlnet -o control_v11p_sd15_softedge_fp16.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11f1p_sd15_depth_fp16.safetensors -d ./models/controlnet -o control_v11f1p_sd15_depth_fp16.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_canny_fp16.safetensors -d ./models/controlnet -o control_v11p_sd15_canny_fp16.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_seg_fp16.safetensors -d ./models/controlnet -o control_v11p_sd15_seg_fp16.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15s2_lineart_anime_fp16.safetensors -d ./models/controlnet -o control_v11p_sd15s2_lineart_anime_fp16.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11e_sd15_ip2p_fp16.safetensors -d ./models/controlnet -o control_v11e_sd15_ip2p_fp16.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_inpaint_fp16.safetensors -d ./models/controlnet -o control_v11p_sd15_inpaint_fp16.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11f1e_sd15_tile_fp16.safetensors -d ./models/controlnet -o control_v11f1e_sd15_tile_fp16.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_scribble_fp16.safetensors -d ./models/controlnet -o control_v11p_sd15_scribble_fp16.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/CiaraRowles/TemporalNet/resolve/main/diff_control_sd15_temporalnet_fp16.safetensors -d ./models/controlnet -o diff_control_sd15_temporalnet_fp16.safetensors

  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_mlsd_fp16.safetensors -d ./models/controlnet -o control_v11p_sd15_mlsd_fp16.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_normalbae_fp16.safetensors -d ./models/controlnet -o control_v11p_sd15_normalbae_fp16.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11e_sd15_shuffle_fp16.safetensors -d ./models/controlnet -o control_v11e_sd15_shuffle_fp16.safetensors

  # aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/TencentARC/T2I-Adapter/resolve/main/models/t2iadapter_style_sd14v1.pth -d ./models/controlnet -o t2iadapter_style_sd14v1.pth
  # aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/TencentARC/T2I-Adapter/resolve/main/models/t2iadapter_color_sd14v1.pth -d ./models/controlnet -o t2iadapter_color_sd14v1.pth
  # aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/TencentARC/T2I-Adapter/resolve/main/models/t2iadapter_sketch_sd15v2.pth -d ./models/controlnet -o t2iadapter_sketch_sd15v2.pth
  # aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/TencentARC/T2I-Adapter/resolve/main/models/t2iadapter_zoedepth_sd15v1.pth -d ./models/controlnet -o t2iadapter_zoedepth_sd15v1.pth

  # aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/lllyasviel/sd_control_collection/resolve/main/ioclab_sd15_recolor.safetensors -d ./models/controlnet -o ioclab_sd15_recolor.safetensors  
  # aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/lllyasviel/sd_control_collection/resolve/main/ip-adapter_sd15_plus.pth -d ./models/controlnet -o ip-adapter_sd15_plus.pth  
fi
