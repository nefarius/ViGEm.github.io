# API Documentation

!!! important "Work in progress"

!!! example "Define/include necessary types"

    === "C#"
        ```csharp
        public static Guid GUID_DEVINTERFACE_BTHPS3_SIXAXIS => Guid.Parse("7B0EAE3D-4414-4024-BCBD-1C21523768CE");
        public static Guid GUID_DEVINTERFACE_BTHPS3_NAVIGATION => Guid.Parse("3E53723A-440C-40AF-8895-EA439D75E7BE");
        public static Guid GUID_DEVINTERFACE_BTHPS3_MOTION => Guid.Parse("BCEC605D-233C-4BEF-9A10-F2B81B5297F6");
        public static Guid GUID_DEVINTERFACE_BTHPS3_WIRELESS => Guid.Parse("64CB1EE2-B428-4CE8-8794-F68036E57BE5");
        ```

    === "C/C++"
        ```cpp
        #include <BthPS3.h>
        ```

!!! example "Device detection dependencies"
    === "C#"
        ```PowerShell
        Install-Package Nefarius.Devcon
        Install-Package PInvoke.Kernel32
        ```

    === "C/C++"
        ```cpp
        #define WIN32_LEAN_AND_MEAN
        #include <Windows.h>
        #include <SetupAPI.h>
        #pragma comment(lib, "SetupAPI.lib")
        ```

!!! example "Enumerate detected devices"
    === "C#"
        ```csharp
        var instanceId = 0;

        //
        // Enumerate GUID_DEVINTERFACE_BTHPS3_SIXAXIS
        // 
        while (Devcon.Find(
            GUID_DEVINTERFACE_BTHPS3_SIXAXIS,
            out var path,
            out var instance,
            instanceId++
        ))
        {
            // Connected SIXAXIS/DualShock 3 found
        }
        ```

    === "C/C++"
        ```cpp
        /* to be filled */
        ```
