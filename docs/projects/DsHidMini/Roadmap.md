# Roadmap

!!! important "Getting migrated"
    Since the project is now public on GitHub, new problems and feature requests will be recorded and discussed on the [issue tracker](https://github.com/ViGEm/DsHidMini/issues). This page might not be up to date until fully migrated.

Rough road map with useful features (in no particular order):

- [X] Implement auto-disconnect on wireless after idle timeout to save battery ⚡
- [ ] Implement/expose more options to control pairing behavior ⬇️
    - [ ] Add toggle option to UI to globally disable or enable auto-pairing
    - [ ] Add per-device action to UI to pair to user-defined MAC address 
- [X] UI tool for configuration 🚧
- [X] Test/fix power behavior (like, what happens when the system wants to sleep with controllers connected etc.) ⚡
- [ ] Integrate ViGEm client SDK for XInput support ⚡
    - Might become obsolete by potential collaboration with DS4Windows
- [X] Test and document setup with PCSX2, RetroArch ⚡
- [X] Implement/expose rumble support via PID/FFB ⚡
    - [X] Craft and test necessary PID section for report descriptor
    - [X] Add OEM registry values for DirectInput to detect effects
    - [X] Decode and implement output and feature reports
        - `Constant Force` effect is implemented
- [ ] Implement/expose gyro and accelerometer via some channel ⚡
    - [X] Implemented in SIXAXIS.SYS mode for RPCS3 readout via `GET_FEATURE` report
    - [ ] For other emulation modes, see if [Sensor HID class driver](https://docs.microsoft.com/en-us/windows-hardware/drivers/hid/sensor-hid-class-driver) can help
- [ ] Bluetooth: replace current verbose code with `DMF_ContinuousRequestTarget` ⬇️
- [X] Add option to chose between event based and periodic output report sending ⚡
- [X] Address issue of both USB and Bluetooth connection being able at the same time ⚡

## Key explanation

| Emoji | Meaning |
|---|---|
| ⚡ | High priority/interest |
| ⬇️ | Low priority |
| ❓ | Potentially useful |
| 🚧 | Currently in progress |
