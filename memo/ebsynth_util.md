[ebsynth.md 설명](https://github.com/ninjaneural/webui/blob/master/memo/ebsynth.md)

1. [ebsynth_util.zip 다운로드](https://github.com/ninjaneural/webui/blob/master/memo/ebsynth_util/ebsynth_util.zip)

> ebsynth_utility익스텐션 기능중 일부를 로컬에서 사용하도록 수정한거에요~  
> (https://github.com/s9roll7/ebsynth_utility)

2. 사용법

- opencv-python 설치 (최초 한번만하면 되요)

```
pip install opencv-python
```

- 키프레임 만들기 (stage2)

```
python run_stage2.py input.mp4 ./input ./video_key 10 300 8.5 7
```

- Ebsynth 프로젝트 만들기 (stage5)

```
python run_stage5.py ./input ./key out-
```

- 부드럽게 영상 이어붙이기 (stage7)

```
python run_stage7.py input.mp4 out-
```
