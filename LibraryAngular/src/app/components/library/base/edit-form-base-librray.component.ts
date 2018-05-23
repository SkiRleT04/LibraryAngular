import { Input, EventEmitter, Output } from "@angular/core";
import { Book } from "../../../models/book";
import { FormGroup, FormControl } from "@angular/forms";

export abstract class EditFormBaseLibrrayComponent<T> {
    
  public active = true;

  public abstract get editForm(): FormGroup;


  @Input() public isNew = false;

  @Input() public set model(item: T) {

    this.editForm.reset(item);
    this.active = item !== undefined;
  }

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<Book> = new EventEmitter();

  public onSave(e): void {
    e.preventDefault();
    this.save.emit(this.editForm.value);
    this.active = false;
  }

  public onCancel(e): void {
    e.preventDefault();
    this.closeForm();
  }

  private closeForm(): void {
    this.active = false;
    this.cancel.emit();
  }

}
