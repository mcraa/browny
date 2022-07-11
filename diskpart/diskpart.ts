import { spawn } from 'child_process';
import process from 'process';


class Echo {
    say(stuff: string, ...args: string[]) {
        console.log(stuff, ...args);
    }
}

let child = spawn('pwd')

child.stdout.pipe(process.stdout)

let echo = new Echo();
echo.say("DISK", 'P', 'ART')