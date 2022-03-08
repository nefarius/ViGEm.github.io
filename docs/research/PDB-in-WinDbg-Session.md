# Fix Symbol loading for Kernel Driver minidump analysis

## Preparations

You need to have the exact same version of the **driver binary** (`.sys` file) and the **debug information file** (PDB) ready on the machine running the WinDbg session.

## Debugging session

First, **triple-check** that you've got a local symbol cache configured **and** have the Microsoft Symbol Server referenced in the session:

```text
.sympath cache*D:\symbols;srv*https://msdl.microsoft.com/download/symbols
```

In this example, my local path where symbols get stored and looked up from is `D:\symbols`, adjust to your system accordingly. Then turn on "noisy symbol loading" to get vital details about the symbol loading process:

```text
!sym noisy
```

All set, now force reloading all symbols, this will spit out a great deal of diagnostics:

```text
.reload /n /f
```

Once done, look for the first occurrence of a line similar to the following:

```text
SYMSRV:  UNC: d:\symbols\mydriver.sys\620F6CF740000\mydriver.sys - path not found
```

Where `mydriver.sys` is replaced with the driver you're debugging. Create the directory structure `d:\symbols\mydriver.sys\620F6CF740000\` with PowerShell:

```PowerShell
New-Item -Type Directory -Path "d:\symbols\mydriver.sys\620F6CF740000\"
```

Put the driver **binary** file `mydriver.sys` in this directory.

Now we'll determine the location where the debugger will expect the PDB. We can get this information with the `symchk` tool (included in the Windows Driver SDK, typical location: `C:\Program Files (x86)\Windows Kits\10\Debuggers\x64`) in PowerShell:

```PowerShell
[System.Environment]::SetEnvironmentVariable('_NT_SYMBOL_PATH','cache*D:\symbols;srv*https://msdl.microsoft.com/download/symbols')
symchk /v /os "D:\symbols\mydriver.sys\620F6CF740000\mydriver.sys"
```

Look for the first occurrence of this line:

```text
SYMSRV:  UNC: D:\symbols\mydriver.pdb\BBFF36A8FA374D1DAD904AD5AFDD8B441\mydriver.pdb - file not found
```

Yet again back in PowerShell, create this directory structure:

```PowerShell
New-Item -Type Directory -Path "D:\symbols\mydriver.pdb\BBFF36A8FA374D1DAD904AD5AFDD8B441\"
```

Finally, place the **PDB file** in this directory.

If you now run the `symchk` command again, the output should have changed to:

```text
SYMSRV:  PATH: D:\symbols\mydriver.pdb\BBFF36A8FA374D1DAD904AD5AFDD8B441\mydriver.pdb
SYMSRV:  RESULT: 0x00000000
```

!!! important "Watch out for mismatched pdb"
    If you also get a line similar to
    ```text
    DBGHELP: D:\symbols\mydriver.pdb\BBFF36A8FA374D1DAD904AD5AFDD8B441\mydriver.pdb - mismatched pdb
    ```
    the PDB file used is the wrong version, most probably from a newer or older build and must be replaced with the correct one!

Finally back in WinDbg we can invoke another symbol loading:

```text
.reload /n /f
```

After these steps, the items in the call stack should be resolved to proper function names:

```text
9: kd> kc
 # Call Site
00 nt!KeBugCheckEx
01 Wdf01000!Mx::MxBugCheckEx
02 Wdf01000!FxVerifierBugCheckWorker
03 Wdf01000!FxVerifierNullBugCheck
04 Wdf01000!imp_WdfObjectGetTypedContextWorker
05 mydriver!WdfObjectGetTypedContextWorker
06 mydriver!DeviceRequestContextGet
07 mydriver!EvtRequestCompletionTimer
08 Wdf01000!FxTimer::TimerHandler
09 Wdf01000!FxTimer::_FxTimerWorkItemCallback
0a Wdf01000!FxSystemWorkItem::WorkItemHandler
0b Wdf01000!FxSystemWorkItem::_WorkItemThunk
0c nt!IopProcessWorkItem
0d nt!ExpWorkerThread
0e nt!PspSystemThreadStartup
0f nt!KiStartSystemThread
```
