{
  "cmd": ["node", "$file"],
  "file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
  "selector": "source.js",
  "shell": true,
  "encoding": "cp1252",
  "windows":
    {
        "shell_cmd": "taskkill /F /IM node.exe & node $file"
    },
    "linux":
    {
        "shell_cmd": "killall node; /usr/bin/env node $file"
    },
    "osx":
    {
        "shell_cmd": "killall node; /usr/bin/env node $file"
    }
}