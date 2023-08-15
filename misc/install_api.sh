pip install -q xformers==0.0.20 triton==2.0.0 -U

git clone -b v1.5.1 https://github.com/AUTOMATIC1111/stable-diffusion-webui /content/$1
if [ $2 == True ]; then
  git clone https://github.com/CiaraStrawberry/sd-webui-controlnet-TemporalNet-API /content/$1/extensions/controlnet
fi
if [ $3 == True ]; then
  git clone -b mmdet3 https://github.com/ninjaneural/ddetailer /content/$1/extensions/ddetailer
fi
if [ $4 == True ]; then
  git clone https://github.com/Bing-su/adetailer /content/$1/extensions/adetailer
fi
if [ $5 == True ]; then
  git clone https://github.com/ninjaneural/segment-anything /content/$1/extensions/segment-anything
fi

git clone https://github.com/adieyal/sd-dynamic-prompts /content/$1/extensions/sd-dynamic-prompts
git clone https://github.com/mcmonkeyprojects/sd-dynamic-thresholding /content/$1/extensions/sd-dynamic-thresholding
git clone https://github.com/Coyote-A/ultimate-upscale-for-automatic1111 /content/$1/extensions/ultimate-upscale-for-automatic1111
git clone https://github.com/pkuliyi2015/multidiffusion-upscaler-for-automatic1111 /content/$1/extensions/multidiffusion-upscaler-for-automatic1111
git clone https://github.com/KohakuBlueleaf/a1111-sd-webui-lycoris /content/$1/extensions/a1111-sd-webui-lycoris

if [ $2 == True ]; then
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/CiaraRowles/TemporalNet2/resolve/main/temporalnetversion2.ckpt -d /content/$1/extensions/controlnet/models -o temporalnetversion2.ckpt
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/CiaraRowles/TemporalNet2/resolve/main/temporalnetversion2.yaml -d /content/$1/extensions/controlnet/models -o temporalnetversion2.yaml

  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_openpose_fp16.safetensors -d /content/$1/extensions/controlnet/models -o control_v11p_sd15_openpose_fp16.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_lineart_fp16.safetensors -d /content/$1/extensions/controlnet/models -o control_v11p_sd15_lineart_fp16.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_softedge_fp16.safetensors -d /content/$1/extensions/controlnet/models -o control_v11p_sd15_softedge_fp16.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11f1p_sd15_depth_fp16.safetensors -d /content/$1/extensions/controlnet/models -o control_v11f1p_sd15_depth_fp16.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_canny_fp16.safetensors -d /content/$1/extensions/controlnet/models -o control_v11p_sd15_canny_fp16.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11f1e_sd15_tile_fp16.safetensors -d /content/$1/extensions/controlnet/models -o control_v11f1e_sd15_tile_fp16.safetensors

  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/CiaraRowles/TemporalNet/resolve/main/diff_control_sd15_temporalnet_fp16.safetensors -d /content/$1/extensions/controlnet/models -o diff_control_sd15_temporalnet_fp16.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_seg_fp16.safetensors -d /content/$1/extensions/controlnet/models -o control_v11p_sd15_seg_fp16.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15_scribble_fp16.safetensors -d /content/$1/extensions/controlnet/models -o control_v11p_sd15_scribble_fp16.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/resolve/main/control_v11p_sd15s2_lineart_anime_fp16.safetensors -d /content/$1/extensions/controlnet/models -o control_v11p_sd15s2_lineart_anime_fp16.safetensors
fi

if [ $5 == True ]; then
  mkdir /content/$1/models/sam
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://dl.fbaipublicfiles.com/segment_anything/sam_vit_h_4b8939.pth -d /content/$1/models/sam -o sam_vit_h_4b8939.pth
fi

sed -i -e "/from modules import launch_utils/a\import os" /content/$1/launch.py
sed -i -e "/        prepare_environment()/a\        os.system(f\\\"\"\"sed -i -e \"s/dict()))/dict())).cuda()/g\" /content/$1/repositories/stable-diffusion-stability-ai/ldm/util.py\"\"\")" /content/$1/launch.py
wget https://raw.githubusercontent.com/ninjaneural/webui/master/misc/config_api.json -O /content/$1/config.json
