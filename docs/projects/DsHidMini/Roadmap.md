# Roadmap

!!! important "Getting migrated"
    Since the project is now public on GitHub, new problems and feature requests will be recorded and discussed on the [issue tracker](https://github.com/ViGEm/DsHidMini/issues). This page might not be up to date until fully migrated.

Rough road map with useful features (in no particular order):

- [ ] Implement/expose more options to control pairing behavior ⬇️
    - [ ] Add toggle option to UI to globally disable or enable auto-pairing
    - [ ] Add per-device action to UI to pair to user-defined MAC address
- [ ] Implement/expose gyro and accelerometer via some channel
    - [X] Implemented in SIXAXIS.SYS mode for RPCS3 readout via `GET_FEATURE` report
    - [ ] For other emulation modes, see if [Sensor HID class driver](https://docs.microsoft.com/en-us/windows-hardware/drivers/hid/sensor-hid-class-driver) can help
