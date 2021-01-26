import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  list: any;
  listFlag: any;
  cities = {};
  month = [
    'Januari', 'Februari', 'Maret',
    'April', 'Mei', 'Juni', 'Juli',
    'Agustus', 'September', 'Oktober',
    'November', 'Desember'];
  countries = [{
    id: 1, name: 'English'
  },
  {
    id: 2, name: 'Indonesia'
  },
  ];
  constructor(
    private Service: ServiceService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      country: ['', Validators.required],
      flag: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phonenumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      date: ['', Validators.required],
      month: ['', Validators.required],
      year: [''],
      province: ['']
    });
    this.cities = this.countries;
    this.getCountries();
    this.getFlag();
  }

  get f() { return this.registerForm.controls; }
  getCountries() {
    this.Service.getCountries().subscribe(listcountry => {
      this.list = listcountry;
      this.list = listcountry.map(function (a) { return a['name']; });
    })
  }

  getFlag() {
    this.Service.getFlag().subscribe(listFlags => {
      this.listFlag = listFlags;

    })
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
