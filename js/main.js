var url = 'http://demo3391386.mockable.io/daryl/get-jobs.json';
var xhr = new XMLHttpRequest();
xhr.open("GET", url, false);
xhr.onload = function () {
    var data = JSON.parse(xhr.responseText);
    
    var ul = document.createElement('UL');
    var li, items = [];
    data.jobs.forEach(function (job) {
        li = document.createElement('LI');
        li.hidden = true;
        li.innerHTML = '<a href="' + job.link + '">' + job.jobTitle + '</a>';
        ul.appendChild(li);
        items.push(li);
    });

    var placeholder = document.getElementById('job-slide');
    placeholder.appendChild(ul);
    
    var btn_prev = document.createElement('BUTTON');
    btn_prev.innerHTML = 'Prev';
    placeholder.appendChild(btn_prev);
    
    var btn_next = document.createElement('BUTTON');
    btn_next.innerHTML = 'Next';
    placeholder.appendChild(btn_next);

    var i = 0,
        l = items.length;
    items[i].hidden = false;
    var intervalID = window.setInterval(function () {
        items[i].hidden = true;
        i++;
        if (i >= l) {
            i = 0;
        }
        items[i].hidden = false;
    }, 3000);
    
    btn_prev.addEventListener('click', function(event) {
        event.preventDefault();
        window.clearInterval(intervalID);
        items[i].hidden = true;
        i--;
        if (i < 0) {
            i = l-1;
        }
        items[i].hidden = false;
    });
    
    btn_next.addEventListener('click', function(event) {
        event.preventDefault();
        window.clearInterval(intervalID);
        items[i].hidden = true;
        i++;
        if (i >= l) {
            i = 0;
        }
        items[i].hidden = false;
    });
    
};
xhr.send();