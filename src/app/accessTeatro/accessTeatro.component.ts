import { Component } from '@angular/core';

@Component({
  selector: 'accessTeatro',
  templateUrl: './accessTeatro.component.html',
  styleUrls: ['./accessTeatro.component.css']
})

export class accessTeatro_component {
  EntryDatabase(key: string) {
    if (key == '6a435159') {
      var conn = this.getValue(key);
      conn = this.setValue(key);
      this.div = key;
    } else if(key == ''){
      document.getElementById('output').innerHTML = 'chiave non inserita';
    }
    else{
      document.getElementById('output').innerHTML = 'chiave errata';
    }
  }

  getValue(key: string) {
    const obs = ajax({
      method: 'GET',
      url: URL + '/get?key=' + key,
      crossDomain: true,
    });
    obs.subscribe({
      next: (res: AjaxResponse<any>) => {
        console.log(res.response);
      },
      error: (err: AjaxError) => console.error(err.response),
    });
  }

  setValue(key: string) {
    const obs = ajax({
      method: 'POST',
      url:URL + '/set?key=' + key,
      crossDomain: true,
      body: '6a435159',
    })
    obs.subscribe({
      next: (res: AjaxResponse<any>) => {
        console.log('Ok!');
      },
      error: (err: AjaxError) => console.error(err.response),
    });
  }
}