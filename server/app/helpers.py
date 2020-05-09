from faker import Faker
import random
fake = Faker()

def create_fake_users(count):
    users = []
    for i in range(count):
        users.append(
            {
                "firstName": fake.first_name(),
                "lastName": fake.last_name(),
                "id": fake.uuid4(),
                "status": "queued" if random.random() < 0.5 else "touring" 
            }
        )
    return users