pip install -q xformers==0.0.20 triton==2.0.0 -U

git clone -b v1.5.1 https://github.com/AUTOMATIC1111/stable-diffusion-webui /content/$1

wget https://raw.githubusercontent.com/ninjaneural/webui/master/misc/stabesr/config.json -O /content/$1/config.json
wget https://raw.githubusercontent.com/ninjaneural/webui/master/misc/stablesr/ui-config.json -O /content/$1/ui-config.json

git clone https://github.com/pkuliyi2015/sd-webui-stablesr /content/$1/extensions/sd-webui-stablesr
git clone https://github.com/pkuliyi2015/multidiffusion-upscaler-for-automatic1111 /content/$1/extensions/multidiffusion-upscaler-for-automatic1111
aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/Iceclear/StableSR/resolve/main/webui_768v_139.ckpt -d /content/$1/extensions/sd-webui-stablesr/models/ -o webui_768v_139.ckpt
aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/stabilityai/stable-diffusion-2-1/resolve/main/v2-1_768-ema-pruned.safetensors -d /content/$1/models/Stable-diffusion -o v2-1_768-ema-pruned.safetensors
