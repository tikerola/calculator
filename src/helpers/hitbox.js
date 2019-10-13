import { coordinates as c } from './coordinates'


const BUTTON_WIDTH = 45
const BUTTON_HEIGHT = 36

export default (x, y) => {
    // Eka sarake ja 0, 1, 4, 7, AC

    if (x >= c.c1x && x <= (c.c1x + BUTTON_WIDTH) && y >= c.r5y && y <= (c.r5y + BUTTON_HEIGHT)) {
        return 0
    }
    else if (x >= c.c1x && x <= (c.c1x + BUTTON_WIDTH) && y >= c.r4y && y <= (c.r4y + BUTTON_HEIGHT)) {   
        return 1
    }
    else if (x >= c.c1x && x <= (c.c1x + BUTTON_WIDTH) && y >= c.r3y && y <= (c.r3y + BUTTON_HEIGHT)) {  
        return 4
    }
    else if (x >= c.c1x && x <= (c.c1x + BUTTON_WIDTH) && y >= c.r2y && y <= (c.r2y + BUTTON_HEIGHT)) {   
        return 7
    }
    else if (x >= c.c1x && x <= (c.c1x + BUTTON_WIDTH) && y >= c.r1y && y <= (c.r1y + BUTTON_HEIGHT)) {  
        return 'clear'
    }

    //toka sarake

    else if (x >= c.c2x && x <= (c.c2x + BUTTON_WIDTH) && y >= c.r5y && y <= (c.r5y + BUTTON_HEIGHT)) {
        return '.'
    } else if (x >= c.c2x && x <= (c.c2x + BUTTON_WIDTH) && y >= c.r4y && y <= (c.r4y + BUTTON_HEIGHT)) {
        return 2
    }
    else if (x >= c.c2x && x <= (c.c2x + BUTTON_WIDTH) && y >= c.r3y && y <= (c.r3y + BUTTON_HEIGHT)) {
        return 5
    }
    else if (x >= c.c2x && x <= (c.c2x + BUTTON_WIDTH) && y >= c.r2y && y <= (c.r2y + BUTTON_HEIGHT)) {
        return 8
    }
    else if (x >= c.c2x && x <= (c.c2x + BUTTON_WIDTH) && y >= c.r1y && y <= (c.r1y + BUTTON_HEIGHT)) {
        return 'clear'
    }

    // kolmas sarake

    else if (x >= c.c3x && x <= (c.c3x + BUTTON_WIDTH) && y >= c.r5y && y <= (c.r5y + BUTTON_HEIGHT)) {
        return '='
    } else if (x >= c.c3x && x <= (c.c3x + BUTTON_WIDTH) && y >= c.r4y && y <= (c.r4y + BUTTON_HEIGHT)) {
        return 3
    }
    else if (x >= c.c3x && x <= (c.c3x + BUTTON_WIDTH) && y >= c.r3y && y <= (c.r3y + BUTTON_HEIGHT)) {
        return 6
    }
    else if (x >= c.c3x && x <= (c.c3x + BUTTON_WIDTH) && y >= c.r2y && y <= (c.r2y + BUTTON_HEIGHT)) {
        return 9
    }
    else if (x >= c.c3x && x <= (c.c3x + BUTTON_WIDTH) && y >= c.r1y && y <= (c.r1y + BUTTON_HEIGHT)) {
        return '%'
    }

    // neljäs sarake

    else if (x >= c.c4x && x <= (c.c4x + BUTTON_WIDTH) && y >= c.r4y && y <= (c.r5y + BUTTON_HEIGHT)) {
        return '+'
    } else if (x >= c.c4x && x <= (c.c4x + BUTTON_WIDTH) && y >= c.r3y && y <= (c.r3y + BUTTON_HEIGHT)) {
        return '-'
    }
    else if (x >= c.c4x && x <= (c.c4x + BUTTON_WIDTH) && y >= c.r2y && y <= (c.r2y + BUTTON_HEIGHT)) {
        return 'x'
    }
    else if (x >= c.c4x && x <= (c.c4x + BUTTON_WIDTH) && y >= c.r1y && y <= (c.r1y + BUTTON_HEIGHT)) {
        return '/'
    }

    // jos ei osuta näppäimistölle

    return 'missHit'
}