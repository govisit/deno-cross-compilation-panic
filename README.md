# Deno cross compilation panic

## Quickstart

```bash
deno task start
```

`run` **works** on both Linux and Windows machines.

Compiling on Linux and running on Linux **works**.

```bash
deno task compile-host

./deno-cross-compilation-panic
```

Compiling on Windows and running on Windows **works**.

```powershell
deno task compile-host

.\deno-cross-compilation-panic.exe
```

## Instructions to recreate issue

From Linux machine:

```bash
deno task compile-windows
```

Copy the generated executable to Windows PC and run:

```powershell
$env:RUST_BACKTRACE="full"; .\deno-cross-compilation-panic.exe
```

I get this output:

```
thread 'main' panicked at runtime\ops\runtime.rs:24:45:
called `Result::unwrap()` on an `Err` value: ()
stack backtrace:
   0:     0x7ff751dff302 - <unknown>
   1:     0x7ff750c5fffd - <unknown>
   2:     0x7ff751ddf2e1 - <unknown>
   3:     0x7ff751e0298a - <unknown>
   4:     0x7ff751e022cf - <unknown>
   5:     0x7ff751e030a3 - <unknown>
   6:     0x7ff751e02ba9 - <unknown>
   7:     0x7ff751e02ae9 - <unknown>
   8:     0x7ff751e02ad2 - <unknown>
   9:     0x7ff75334bc87 - CrashForExceptionInNonABICompliantCodeRange
  10:     0x7ff75334c233 - CrashForExceptionInNonABICompliantCodeRange
  11:     0x7ff751526ce3 - <unknown>
  12:     0x7ff75305f91f - CrashForExceptionInNonABICompliantCodeRange
  13:     0x7ff75305dbde - CrashForExceptionInNonABICompliantCodeRange
  14:     0x7ff75306cd54 - CrashForExceptionInNonABICompliantCodeRange
  15:     0x7ff7531dc6fa - CrashForExceptionInNonABICompliantCodeRange
  16:     0x7ff75305dbde - CrashForExceptionInNonABICompliantCodeRange
  17:     0x7ff75305b7dc - CrashForExceptionInNonABICompliantCodeRange
  18:     0x7ff75305b3d7 - CrashForExceptionInNonABICompliantCodeRange
  19:     0x7ff752239805 - <unknown>
  20:     0x7ff752239032 - <unknown>
  21:     0x7ff752132df8 - <unknown>
  22:     0x7ff752313832 - CrashForExceptionInNonABICompliantCodeRange
  23:     0x7ff7529faabc - CrashForExceptionInNonABICompliantCodeRange
  24:     0x7ff7530f557a - CrashForExceptionInNonABICompliantCodeRange
  25:     0x7ff75309709c - CrashForExceptionInNonABICompliantCodeRange
  26:     0x7ff75305dbde - CrashForExceptionInNonABICompliantCodeRange
  27:     0x7ff75305dbde - CrashForExceptionInNonABICompliantCodeRange
  28:     0x7ff75305dbde - CrashForExceptionInNonABICompliantCodeRange
  29:     0x7ff6d328a146 - <unknown>
  30:     0x7ff6d328a5b5 - <unknown>
  31:     0x7ff6d328aa92 - <unknown>
  32:     0x7ff6d3288597 - <unknown>
  33:     0x7ff6d3288e12 - <unknown>
  34:     0x7ff6d3288fd5 - <unknown>
  35:     0x7ff75305dbde - CrashForExceptionInNonABICompliantCodeRange
  36:     0x7ff75305dbde - CrashForExceptionInNonABICompliantCodeRange
  37:     0x7ff6d328a146 - <unknown>
  38:     0x7ff6d328a5b5 - <unknown>
  39:     0x7ff6d328aa92 - <unknown>
  40:     0x7ff6d3288597 - <unknown>
  41:     0x7ff6d3288e12 - <unknown>
  42:     0x7ff6d3288fd5 - <unknown>
  43:     0x7ff75305dbde - CrashForExceptionInNonABICompliantCodeRange
  44:     0x7ff75305dbde - CrashForExceptionInNonABICompliantCodeRange
  45:     0x7ff6d328a146 - <unknown>
  46:     0x7ff6d328a5b5 - <unknown>
  47:     0x7ff6d328aa92 - <unknown>
  48:     0x7ff6d3288597 - <unknown>
  49:     0x7ff6d3288e12 - <unknown>
  50:     0x7ff6d3288fd5 - <unknown>
  51:     0x7ff75305dbde - CrashForExceptionInNonABICompliantCodeRange
  52:     0x7ff75305dbde - CrashForExceptionInNonABICompliantCodeRange
  53:     0x7ff6d328a146 - <unknown>
  54:     0x7ff6d328a5b5 - <unknown>
  55:     0x7ff6d328aa92 - <unknown>
  56:     0x7ff6d3288597 - <unknown>
  57:     0x7ff6d3288e12 - <unknown>
  58:     0x7ff6d3288fd5 - <unknown>
  59:     0x7ff75305dbde - CrashForExceptionInNonABICompliantCodeRange
  60:     0x7ff75305dbde - CrashForExceptionInNonABICompliantCodeRange
  61:     0x7ff6d328a146 - <unknown>
  62:     0x7ff6d328a5b5 - <unknown>
  63:     0x7ff6d328aa92 - <unknown>
  64:     0x7ff6d3288597 - <unknown>
  65:     0x7ff6d3288e12 - <unknown>
  66:     0x7ff6d3288fd5 - <unknown>
  67:     0x7ff75305dbde - CrashForExceptionInNonABICompliantCodeRange
  68:     0x7ff75305dbde - CrashForExceptionInNonABICompliantCodeRange
  69:     0x7ff6d328a146 - <unknown>
  70:     0x7ff6d328a5b5 - <unknown>
  71:     0x7ff6d328aa92 - <unknown>
  72:     0x7ff6d3288597 - <unknown>
  73:     0x7ff6d3288e12 - <unknown>
  74:     0x7ff6d3288fd5 - <unknown>
  75:     0x7ff75305dbde - CrashForExceptionInNonABICompliantCodeRange
  76:     0x7ff75305dbde - CrashForExceptionInNonABICompliantCodeRange
  77:     0x7ff6d328a146 - <unknown>
  78:     0x7ff6d328a5b5 - <unknown>
  79:     0x7ff6d328aa92 - <unknown>
  80:     0x7ff6d3288597 - <unknown>
  81:     0x7ff6d3288e12 - <unknown>
  82:     0x7ff6d3288fd5 - <unknown>
  83:     0x7ff75305dbde - CrashForExceptionInNonABICompliantCodeRange
  84:     0x7ff75309f18d - CrashForExceptionInNonABICompliantCodeRange
  85:     0x7ff75305b7dc - CrashForExceptionInNonABICompliantCodeRange
  86:     0x7ff75305b3d7 - CrashForExceptionInNonABICompliantCodeRange
  87:     0x7ff752239805 - <unknown>
  88:     0x7ff75223a385 - <unknown>
  89:     0x7ff75223a4cf - <unknown>
  90:     0x7ff752242511 - <unknown>
  91:     0x7ff752241bcf - <unknown>
  92:     0x7ff7522419d4 - <unknown>
  93:     0x7ff7522419d4 - <unknown>
  94:     0x7ff7522419d4 - <unknown>
  95:     0x7ff75224161a - <unknown>
  96:     0x7ff75223c874 - <unknown>
  97:     0x7ff7520e88b1 - <unknown>
  98:     0x7ff7520d94f5 - <unknown>
  99:     0x7ff750da96db - <unknown>
 100:     0x7ff750e6ef62 - <unknown>
 101:     0x7ff750b72177 - <unknown>
 102:     0x7ff750b33528 - <unknown>
 103:     0x7ff750b18db0 - <unknown>
 104:     0x7ff750ab894b - <unknown>
 105:     0x7ff750b94e15 - <unknown>
 106:     0x7ff750adf8fd - <unknown>
 107:     0x7ff750b85179 - <unknown>
 108:     0x7ff750ab564e - <unknown>
 109:     0x7ff750b94f39 - <unknown>
 110:     0x7ff753301f3c - CrashForExceptionInNonABICompliantCodeRange
 111:     0x7ff99437257d - BaseThreadInitThunk
 112:     0x7ff9954caa58 - RtlUserThreadStart
thread 'main' panicked at C:\a\deno\deno\runtime\tokio_util.rs:102:28:
called `Result::unwrap()` on an `Err` value: JoinError::Panic(Id(1), ...)
stack backtrace:
   0:     0x7ff751dff302 - <unknown>
   1:     0x7ff750c5fffd - <unknown>
   2:     0x7ff751ddf2e1 - <unknown>
   3:     0x7ff751e0298a - <unknown>
   4:     0x7ff751e022cf - <unknown>
   5:     0x7ff751e030a3 - <unknown>
   6:     0x7ff751e02ba9 - <unknown>
   7:     0x7ff751e02ae9 - <unknown>
   8:     0x7ff751e02ad2 - <unknown>
   9:     0x7ff75334bc87 - CrashForExceptionInNonABICompliantCodeRange
  10:     0x7ff75334c233 - CrashForExceptionInNonABICompliantCodeRange
  11:     0x7ff750b856e7 - <unknown>
  12:     0x7ff750ab564e - <unknown>
  13:     0x7ff750b94f39 - <unknown>
  14:     0x7ff753301f3c - CrashForExceptionInNonABICompliantCodeRange
  15:     0x7ff99437257d - BaseThreadInitThunk
  16:     0x7ff9954caa58 - RtlUserThreadStart
```
