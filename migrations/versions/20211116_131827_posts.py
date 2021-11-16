"""posts

Revision ID: 588deb9a1211
Revises: 3b9e4d301d47
Create Date: 2021-11-16 13:18:27.495402

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '588deb9a1211'
down_revision = '3b9e4d301d47'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('posts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('photoUrl', sa.String(), nullable=False),
    sa.Column('caption', sa.String(length=255)),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id']),
    sa.PrimaryKeyConstraint('id')
    )
    op.alter_column('users', 'profileImage',
               existing_type=sa.VARCHAR('http://clipart-library.com/new_gallery/280-2806732_png-file-svg-default-profile-picture-png.png'))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'profileImage',
               existing_type=sa.VARCHAR(),
               nullable=True)
    # ### end Alembic commands ###
