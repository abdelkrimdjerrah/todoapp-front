declare namespace Entities {
    export interface TodoEntity extends Creatable {
      _id: mongoose.Schema.Types.ObjectId;
      userId: mongoose.Schema.Types.ObjectId;
      text: string;
      isDone: boolean;
      createdAt?: Date;
      updatedAt?: Date;
    }
  }
  