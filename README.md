# GetLiquored

## Getting development environment ready:

### Install chocolatey
used for easy command line installation of software
see commands.txt for command to installed necessary software (nodejs.install python2 jdk8)

### Install React Native CLI
see commands.txt for command to do so

### Install Yarn CLI
see commands.txt for command to do so

### Install Android Studio
make sure these are selected in SDK manager:
    SDK Platforms:
        Android 9 (Pie)
        Android SDK Platform 28
        Intel x86 Atom_64 System Image
    SDK Tools:
        Android SDK Build-Tools: 28.0.3
        hit apply when all are selected

### Configure ANDROID_HOME environment variable
search for "environment variable" in bottom-left search bar
add a new variable called "ANDROID_HOME" under value "C:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk"
    that is the default path of value \
    make sure the variable is saved

### Configure Path environment variable
click "Path" then click edit
click new and add the path "C:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk\platform-tools"
make sure the new path is saved

## Configure Android Virtual Device for the first time
Install HAXM (if you don't have it already)
    SDK manager, under "Extras" check the box next to "Intel x86 Emulator Accelerator (HAXM)"
"Create Virtual Device" under AVD manager
select "Pie" API Level 28 image
click next then finish

http://facebook.github.io/react-native/docs/getting-started