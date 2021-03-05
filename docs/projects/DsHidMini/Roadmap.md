# Roadmap

Rough road map with useful features (in no particular order):

- [ ] Implement support for Navigation controller ⬇️
    - [X] Add USB and Bluetooth Hardware IDs to INF
    - [ ] Adapt feature report for setting/getting Bluetooth master address
    - [ ] Implement device-specific low battery indicator (LED rapid flashing?)
- [X] Implement auto-disconnect on wireless after idle timeout to save battery ⚡
- [ ] Implement/expose more options to control pairing behavior ⬇️
- [X] UI tool for configuration 🚧
- [ ] UDP server for `cemuhook` compatibility ❓
    - Might become obsolete by potential collaboration with DS4Windows
    - See [ds4drv](https://github.com/TheDrHax/ds4drv-cemuhook)
- [X] Test/fix power behavior (like, what happens when the system wants to sleep with controllers connected etc.) ⚡
- [ ] Integrate ViGEm client SDK for XInput support ⚡
    - Might become obsolete by potential collaboration with DS4Windows
- [ ] Add remapping capabilities ⬇️
    - See [jfes](https://github.com/dmitrii-eremin/jfes)
    - Might be redundant due to existing tools
- [ ] Add configurable Turbo Mode for buttons ⬇️
    - Might be redundant due to existing tools
    - Might become obsolete by potential collaboration with DS4Windows
- [ ] Test and document setup with PCSX2, RetroArch ⚡
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
