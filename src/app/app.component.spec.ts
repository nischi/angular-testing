import { TestBed, async } from '@angular/core/testing';
import { Observable } from "rxjs/Rx";
import { BehaviorSubject } from "rxjs/Rx";

import { AppComponent } from './app.component';

class myObject {
  count: number = 0;
  data: mySecondObject[];
}

class mySecondObject {
  name: string;
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});

describe('Observable Test', () => {
  it('length will be ignored', async(() => {
    let subject: BehaviorSubject<myObject> = new BehaviorSubject<myObject>(new myObject());
    let myObservable: Observable<myObject> = subject.asObservable();

    myObservable.subscribe((obj:myObject) => {
      console.log(obj);
      expect(obj.data.length).toBe(100)
    });
  }));
});