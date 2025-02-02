# DeepChat README

This is a ollama deepseek-r1 client. It's just a simple chat, to open it, press `Cmd + Shift + P` or `Ctrl + Shift + P`, type in `deepchat: Open Chat` and press `Return`. Now start chatting.
To change between bigger and smaller models, press `Cmd + Shift + P` or `Ctrl + Shift + P` and select `deepchat: Set 1.5b/8b/32b` and press `return`. This change will affect the next message sent.

**Note**: You need to have `ollama` installed and should probably pull at least one of the models (the worse your computer, the smaller verision, `1.5b` is the smallest and `32b` the largest) using `ollama pull deepseek-r1:<1.5b|8b|32b>`, if not done you will have to wait for a long time until the first words show up.

**Danger**: Pulling a model will require up to about 30 GB of storage.
