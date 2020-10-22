canvas = document.getElementById('canvas')
ctx = document.getElementById('canvas').getContext('2d')

mbo = document.getElementById('mbo')

points = []

canvas.addEventListener('click', event => {
    x = event.clientX
    y = event.clientY
    if (x < canvas.width && y < canvas.height) {
        points.push({ 'x': x, 'y': y })
        placePoint(x, y)
    }
})

mbo.addEventListener('click', event => {
    ch = []
    for (i = 0; i < points.length; i++) {
        ch.push(i)
    }
    h = graham(points, ch)
    hull = []
    for (i = 0;i<h.length;i++){
        hull.push(points[h[i]])
    }
    drawHull(hull)
})

function placePoint(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, 2, 0, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
}

function drawHull(hull) {
    ctx.moveTo(hull[0].x, hull[0].y)
    ctx.beginPath()
    for (i = 0; i < hull.length; i++) {
        ctx.lineTo(hull[i].x, hull[i].y)
    }
    ctx.stroke()
    ctx.lineTo(hull[0].x, hull[0].y)
    ctx.stroke()
}

function classify(vector, x1, y1) {
    return pr = (vector.x2 - vector.x1) * (y1 - vector.y1) - (vector.y2 - vector.y1) * (x1 - vector.x1);
}

function graham(points, ch) {
    var minI = 0; //номер нижней левой точки
    var min = points[0].x;
    // ищем нижнюю левую точку
    for (var i = 1; i < points.length; i++) {
        if (points[i].x < min) {
            min = points[i].x;
            minI = i;
        }
    }
    // делаем нижнюю левую точку активной
    ch[0] = minI;
    ch[minI] = 0;

    // сортируем вершины в порядке "левизны"
    for (var i = 1; i < ch.length - 1; i++) {
        for (var j = i + 1; j < ch.length; j++) {
            var cl = classify({
                'x1': points[ch[0]].x,
                'y1': points[ch[0]].y,
                'x2': points[ch[i]].x,
                'y2': points[ch[i]].y
            }, points[ch[j]].x, points[ch[j]].y) // функция classify считает векторное произведение.            

            // если векторное произведение меньше 0, следовательно вершина j левее вершины i.Меняем их местами
            if (cl < 0) {
                temp = ch[i];
                ch[i] = ch[j];
                ch[j] = temp;
            }
        }
    }

    //записываем в стек вершины, которые точно входят в оболочку
    h = [];
    h[0] = ch[0];
    h[1] = ch[1];


    for (var i = 2; i < ch.length; i++) {
        while (classify({
            'x1': points[h[h.length - 2]].x,
            'y1': points[h[h.length - 2]].y,
            'x2': points[h[h.length - 1]].x,
            'y2': points[h[h.length - 1]].y
        }, points[ch[i]].x, points[ch[i]].y) < 0) {
            h.pop(); // пока встречается правый поворот, убираем точку из оболочки
        }
        h.push(ch[i]); // добавляем новую точку в оболочку
    }
    return h
}