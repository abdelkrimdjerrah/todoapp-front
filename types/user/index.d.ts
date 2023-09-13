declare namespace Entities {
  export interface UserEntity extends Creatable {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
}
