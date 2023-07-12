// loadTable.js

d3.csv('../docs/ctf.csv').then(function(data) {
    var div = d3.select('#myTable');
    var table = div.append('table');
    var thead = table.append('thead');
    var tbody = table.append('tbody');

    thead.append('tr').selectAll('th')
        .data(Object.keys(data[0]))
        .enter()
        .append('th')
        .text(function(d) { return d; });

    var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr');

    var cells = rows.selectAll('td')
        .data(function(row) {
            return Object.values(row);
        })
        .enter()
        .append('td')
        .text(function(d) { return d; });
});
