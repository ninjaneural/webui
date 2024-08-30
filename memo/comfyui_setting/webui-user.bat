@echo off

set SD_WEBUI_RESTARTING=1
set PYTHON=
set GIT=
set VENV_DIR=
set COMMANDLINE_ARGS=--ckpt-dir e:/models/checkpoints --lora-dir e:/models/loras --embeddings-dir e:/models/embeddings --controlnet-dir e:/models/controlnet --esrgan-models-path e:/models/upscale_models --vae-dir e:/models/vae

call webui.bat --theme dark --xformers --no-half-vae --api