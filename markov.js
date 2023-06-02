const fs = require('fs').promises

class MarkovChain {
    constructor(order) {
        this.order = order;
        this.chain = {};
    }

    train(text) {
        const words = text.split(" ");
        for (let i = 0; i < words.length - this.order; i++) {
            const input = words.slice(i, i + this.order).join(" ");
            const output = words[i + this.order];
            if (!this.chain[input]) {
                this.chain[input] = [];
            }
            this.chain[input].push(output);
        }
    }

    generate(startingInput, length) {
        let currentInput = startingInput;
        let output = currentInput.split(" ");
        for (let i = 0; i < length; i++) {
            const possibleOutputs = this.chain[currentInput];
            if (!possibleOutputs || possibleOutputs.length === 0) {
                break;
            }
            const randomIndex = Math.floor(Math.random() * possibleOutputs.length);
            const nextOutput = possibleOutputs[randomIndex];
            output.push(nextOutput);
            currentInput = output.slice(output.length - this.order, output.length).join(" ");
        }
        return output.join(" ");
    }

    async readString(input) {
        try {
            const data = await fs.readFile(input, { encoding: 'utf8' });
            return data.toString();
        } catch (err) {
            console.error(err);
            return '';
        }
    }
}
// Usage example:
const chain = new MarkovChain(2);

(async () => {
    const trainingText = await chain.readString("source.txt");
    chain.train(trainingText);

    const startingInput = "I am"
    const generatedTextLength = 25;
    const generatedText = chain.generate(startingInput, generatedTextLength);
    console.log(generatedText);
})();


