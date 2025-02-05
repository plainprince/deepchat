/* const { default: ollama } = require('ollama');
const vscode = require('vscode');

let latestPosition = null;
let latestCompletion = "";

function indentLines(input) {
    return input.split("\n").map(line => "\t" + line).join("\n");
}

async function generateCompletion(prefix, suffix, model='deepseek-r1:1.5b') {
    const completion = await ollama.chat({
        stream: false,
        model,
        messages: [
            {
                role: 'user',
                content: `<start system>You are a code completion assistant whose only task is to generate code completions. The user’s cursor position is indicated by <cursor>. Your completions should be syntactically correct and seamlessly fit into the user’s existing code. You should respect the structure of the surrounding code, completing functions, variables, or providing common code patterns. The <cursor> should always be placed in the correct location, representing where the cursor is in the code. Your role is to generate logical code suggestions that continue the flow of the current code, while making sure it is relevant to the context and easy for the user to work with.<end system> 
<start user>
${indentLines(prefix)}
<cursor>
${indentLines(suffix)}
<end user>`
            }
        ]
    });

    return completion.message.content;
}

const ghostTextDecoration = vscode.window.createTextEditorDecorationType({
    opacity: '0.6', // Make it semi-transparent (gray effect)
    color: '#808080', // Light gray color
    after: {
        contentText: '', // Will be filled with AI completions
        color: '#808080', // Ensure the ghost text remains gray
        fontStyle: 'italic',
    },
});

function showGhostText(editor, position, suggestion) {
    const decorationOptions = {
        range: new vscode.Range(position, position),
        renderOptions: {
            after: {
                contentText: suggestion, // The AI completion
            },
        },
    };

    editor.setDecorations(ghostTextDecoration, [decorationOptions]);
}

async function showCompletion(model) {
    const editor = vscode.window.activeTextEditor;
    if(!editor) return;

    const position = editor.selection.active;
    const prefix = editor.document.getText(new vscode.Range(new vscode.Position(0, 0), position));
    const suffix = editor.document.getText(new vscode.Range(position, editor.document.lineAt(editor.document.lineCount - 1).range.end));

    let completion = await generateCompletion(prefix, suffix, model)
    showGhostText(editor, position, completion);
    latestPosition = position;
    latestCompletion = completion;
}

function typeInCompletion() {
    const editor = vscode.window.activeTextEditor;
    if (!editor || !latestCompletion || !latestPosition) return;

    editor.edit(editBuilder => {
        editBuilder.insert(latestPosition, latestCompletion);
    });

    latestCompletion = ""; // Reset after typing
}

function hideCompletion() {
    const editor = vscode.window.activeTextEditor;

    if (!editor) return;
    editor.setDecorations(ghostTextDecoration, []);
}

module.exports = { showCompletion, typeInCompletion, hideCompletion }; */