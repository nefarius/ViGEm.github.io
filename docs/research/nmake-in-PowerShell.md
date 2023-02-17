# Have MSBuild/nmake available in PowerShell

The following guide will modify all new PowerShell instances to run the required preparations to invoke MSBuild/nmake.

Open (or create) the profile file `"$((new-object -COM Shell.Application).Namespace(0x05).Self.Path)\WindowsPowerShell\Microsoft.PowerShell_profile.ps1"` and add the following content:

```PowerShell
function Invoke-CmdScript {
  param(
    [String] $scriptName
  )
  $cmdLine = """$scriptName"" $args & set"
  & $Env:SystemRoot\system32\cmd.exe /c $cmdLine |
  select-string '^([^=]*)=(.*)$' | foreach-object {
    $varName = $_.Matches[0].Groups[1].Value
    $varValue = $_.Matches[0].Groups[2].Value
    set-item Env:$varName $varValue
  }
}

function Setup-VS2019 {
  Invoke-CmdScript "C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\VC\Auxiliary\Build\vcvarsall.bat" x64
}

function Setup-VS2022 {
  Invoke-CmdScript "C:\Program Files\Microsoft Visual Studio\2022\Professional\VC\Auxiliary\Build\vcvarsall.bat" x64
}
```

Now whenever you need to build using Visual Studio 2019 simply invoke `Setup-VS2019` or `Setup-VS2022` for Visual Studio 2022, cheers!
