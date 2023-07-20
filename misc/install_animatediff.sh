git clone https://github.com/continue-revolution/sd-webui-animatediff /content/sdd-webui/extensions/animatediff
aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/guoyww/animatediff/resolve/main/mm_sd_v15.ckpt -d /content/sdd-webui/extensions/animatediff/model -o mm_sd_v15.ckpt
