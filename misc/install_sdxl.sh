pip install -q xformers==0.0.20 triton==2.0.0 -U
git clone -b v1.6.0 https://github.com/AUTOMATIC1111/stable-diffusion-webui /content/$1

if [ $3 == True ]; then
  git clone https://github.com/Mikubill/sd-webui-controlnet /content/$1/extensions/controlnet
fi

if [ $4 == True ]; then
  git clone -b nightly https://github.com/ninjaneural/deforum /content/$1/extensions/deforum
fi

if [ $5 == True ]; then
  git clone https://github.com/Bing-su/adetailer /content/$1/extensions/adetailer
fi

git clone https://github.com/adieyal/sd-dynamic-prompts /content/$1/extensions/sd-dynamic-prompts
git clone https://github.com/DominikDoom/a1111-sd-webui-tagcomplete /content/$1/extensions/tagcomplete

if [ $3 == True ]; then
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/lllyasviel/sd_control_collection/resolve/main/diffusers_xl_canny_mid.safetensors -d /content/$1/extensions/controlnet/models -o diffusers_xl_canny_mid.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/lllyasviel/sd_control_collection/resolve/main/diffusers_xl_depth_mid.safetensors -d /content/$1/extensions/controlnet/models -o diffusers_xl_depth_mid.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/lllyasviel/sd_control_collection/resolve/main/kohya_controllllite_xl_canny_anime.safetensors -d /content/$1/extensions/controlnet/models -o kohya_controllllite_xl_canny_anime.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/lllyasviel/sd_control_collection/resolve/main/kohya_controllllite_xl_depth_anime.safetensors -d /content/$1/extensions/controlnet/models -o kohya_controllllite_xl_depth_anime.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/lllyasviel/sd_control_collection/resolve/main/kohya_controllllite_xl_openpose_anime_v2.safetensors -d /content/$1/extensions/controlnet/models -o kohya_controllllite_xl_openpose_anime_v2.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/lllyasviel/sd_control_collection/resolve/main/kohya_controllllite_xl_scribble_anime.safetensors -d /content/$1/extensions/controlnet/models -o kohya_controllllite_xl_scribble_anime.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/lllyasviel/sd_control_collection/resolve/main/sai_xl_canny_256lora.safetensors -d /content/$1/extensions/controlnet/models -o sai_xl_canny_256lora.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/lllyasviel/sd_control_collection/resolve/main/sai_xl_depth_256lora.safetensors -d /content/$1/extensions/controlnet/models -o sai_xl_depth_256lora.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/lllyasviel/sd_control_collection/resolve/main/sai_xl_recolor_256lora.safetensors -d /content/$1/extensions/controlnet/models -o sai_xl_recolor_256lora.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/lllyasviel/sd_control_collection/resolve/main/sai_xl_sketch_256lora.safetensors -d /content/$1/extensions/controlnet/models -o sai_xl_sketch_256lora.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/lllyasviel/sd_control_collection/resolve/main/sargezt_xl_softedge.safetensors -d /content/$1/extensions/controlnet/models -o sargezt_xl_softedge.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/lllyasviel/sd_control_collection/resolve/main/t2i-adapter_xl_canny.safetensors -d /content/$1/extensions/controlnet/models -o t2i-adapter_xl_canny.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/lllyasviel/sd_control_collection/resolve/main/t2i-adapter_xl_openpose.safetensors -d /content/$1/extensions/controlnet/models -o t2i-adapter_xl_openpose.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/lllyasviel/sd_control_collection/resolve/main/t2i-adapter_xl_sketch.safetensors -d /content/$1/extensions/controlnet/models -o t2i-adapter_xl_sketch.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/lllyasviel/sd_control_collection/resolve/main/thibaud_xl_openpose.safetensors -d /content/$1/extensions/controlnet/models -o thibaud_xl_openpose.safetensors
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/lllyasviel/sd_control_collection/resolve/main/ip-adapter_xl.pth -d /content/$1/extensions/controlnet/models -o ip-adapter_xl.pth
  #aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/CiaraRowles/controlnet-temporalnet-sdxl-1.0/resolve/main/diffusion_pytorch_model.safetensors -d /content/$1/extensions/controlnet/models -o diffusion_pytorch_model.safetensors
fi

cd /content/$1

if [ $2 != "v1.6.0" ]; then
  sed -i -e "/from modules import launch_utils/a\import os" /content/$1/launch.py
  sed -i -e "/        prepare_environment()/a\        os.system(f\\\"\"\"sed -i -e \"s/dict()))/dict())).cuda()/g\" /content/$1/repositories/stable-diffusion-stability-ai/ldm/util.py\"\"\")" /content/$1/launch.py
fi

wget https://raw.githubusercontent.com/ninjaneural/webui/master/misc/config_sdxl.json -O /content/$1/config.json
