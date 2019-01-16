import {DebugElement} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TestBed,async,ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {AppComponent} from '../../app/app.component';
describe('Tests App Component',function(){
    let comp:AppComponent;
    let fixture:ComponentFixture<AppComponent>;
    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            imports:[FormsModule],
            declarations:[AppComponent]
        }).compileComponents();    
    }));
        beforeEach(()=>{
         fixture =   TestBed.createComponent(AppComponent);
         comp = fixture.componentInstance;
         comp.like(comp.comments[0]);
        });
        it('should check for component',function(){
            expect(comp).toBeDefined();
        })

        it('should check for first comment',function(){
            expect(comp.comments[0].title).toBe("A Sample Comment");
        })

        it('should check for likes to increase',function(){
            expect(comp.comments[0].likes).toEqual(1);
        })
})