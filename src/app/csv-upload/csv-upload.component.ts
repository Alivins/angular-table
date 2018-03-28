import { Component, OnInit } from '@angular/core';
import { PapaParseService } from 'ngx-papaparse';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.css']
})
export class CsvUploadComponent {
    private csvFile;    
    constructor(private papa: PapaParseService) {
    }
    public changeListener(files: FileList) {
        this.csvFile = files[0]
        // console.log(files[0]);
				   let csv = this.csvFile;
        this.papa.parse(csv, {
            header: true, 
            skipEmptyLines: true, // 빈줄은 빈문자열로 표시
            complete: (results, file) => {
                console.log('Parsed: ', JSON.stringify(results.data));
            }
        });
    }

}
