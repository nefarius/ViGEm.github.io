# About HidGuardian

[![GitHub](https://img.shields.io/badge/GitHub-yellowgreen?logo=github)](https://github.com/ViGEm/HidGuardian) ![Discontinued](https://img.shields.io/badge/Project%20discontinued-critical)

HidGuardian was a research project and proof of concept Windows kernel-mode filter driver that allows system-wide hiding of joysticks and gamepads, addressing doubled-input issues in games running with remapping utilities. It achieved this by attaching as an upper filter to every HID device and comparing its Hardware IDs to registry-backed filter lists, failing the open request on "guarded" devices. It was never really intended to "go viral" and was intentionally quite primitive. Nonetheless it has proven useful over the years.

It was in development from late 2016 to 2018 until it got archived in favour of better solutions. Its direct successor is HidHide.
