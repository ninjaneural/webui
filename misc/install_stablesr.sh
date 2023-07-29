git clone https://github.com/pkuliyi2015/sd-webui-stablesr /content/sdd-webui/extensions/sd-webui-stablesr
git clone https://github.com/pkuliyi2015/multidiffusion-upscaler-for-automatic1111 /content/sdd-webui/extensions/multidiffusion-upscaler-for-automatic1111
aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/Iceclear/StableSR/resolve/main/webui_768v_139.ckpt -d /content/sdd-webui/extensions/sd-webui-stablesr/models/ -o webui_768v_139.ckpt
aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/stabilityai/stable-diffusion-2-1/blob/main/v2-1_768-ema-pruned.safetensors -d /content/sdd-webui/models/Stable-diffusion -o v2-1_768-ema-pruned.safetensors
aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/ckpt/sd-vae-ft-mse-original/resolve/main/vae-ft-mse-840000-ema-pruned.ckpt -d {checkpoint_down_path} -o vae-ft-mse-840000-ema-pruned.vae.pt
aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/hakurei/waifu-diffusion-v1-4/resolve/main/vae/kl-f8-anime2.ckpt -d /content/sdd-webui/models/VAE -o kl-f8-anime2.ckpt
