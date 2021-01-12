// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "vscode-extension" is now active!'
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("vscode-extension.helloWorld", () => {
      vscode.window.showInformationMessage("Hello from VSCode-extension!");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "vscode-extension.askQuestion",
      async () => {
        const answer = await vscode.window.showInformationMessage(
          "How was youre day?",
          "good",
          "bad"
        );

        if (answer === "bad") {
          vscode.window.showInformationMessage("Soory to hear that");
        } else {
          console.log({ answer });
        }
      }
    )
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
