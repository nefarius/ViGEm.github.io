# Roadmap

Rough road map with useful features (in no particular order):

- [ ] Implement support for Navigation controller ⚡
    - [X] Add USB and Bluetooth Hardware IDs to INF
    - [ ] Adapt feature report for setting/getting Bluetooth master address
    - [ ] Implement device-specific low battery indicator (LED rapid flashing?)
- [ ] Implement auto-disconnect on wireless after idle timeout to save battery ⚡
- [ ] Implement/expose more options to control pairing behavior ⬇️
- [ ] UI tool for configuration file ⬇️
- [ ] UDP server for `cemuhook` compatibility ❓
    - See [ds4drv](https://github.com/TheDrHax/ds4drv-cemuhook)
- [ ] Test/fix power behavior (like, what happens when the system wants to sleep with controllers connected etc.) ⚡
- [ ] Integrate ViGEm client SDK for XInput support ⚡
- [ ] Add remapping capabilities ⬇️
    - See [jfes](https://github.com/dmitrii-eremin/jfes)
    - Might be redundant due to existing tools
- [ ] Add configurable Turbo Mode for buttons ⬇️
    - Might be redundant due to existing tools
- [ ] Test and document setup with PCSX2, RetroArch ⚡
- [X] Implement/expose rumble support via PID/FFB ⚡
    - [X] Craft and test necessary PID section for report descriptor
    - [X] Add OEM registry values for DirectInput to detect effects
    - [X] Decode and implement output and feature reports
        - `Constant Force` effect is implemented
- [ ] Implement/expose gyro and accelerometer via some channel ❓
- [ ] Bluetooth: replace current verbose code with `DMF_ContinuousRequestTarget` ⬇️
- [ ] Add option to chose between event based and periodic output report sending ⚡
- [ ] Address issue of both USB and Bluetooth connection being able at the same time ⚡

## Key explanation

| Emoji | Meaning |
|---|---|
| ⚡ | High priority/interest |
| ⬇️ | Low priority |
| ❓ | Potentially useful |
| 🚧 | Currently in progress |
